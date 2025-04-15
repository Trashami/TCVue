const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const rateLimit = require('express-rate-limit');
const axios = require('axios');

const app = express();
const PORT = 3000;

// reCAPTCHA v3 secret key (from Google Admin Console)
const RECAPTCHA_SECRET = 'YOUR_SECRET_KEY';

app.use(cors());
app.use(express.json());

// Rate limiter (max 3 submissions per 15 min per IP)
const reportLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 3,
  message: { error: 'Too many submissions from this IP, try again later.' }
});

app.post('/api/report', reportLimiter, async (req, res) => {
  const { hazardType, location, description, botCheck, recaptchaToken } = req.body;


  // reCAPTCHA v3 token verification
  try {
    const verifyResponse = await axios.post(
      'https://www.google.com/recaptcha/api/siteverify',
      null,
      {
        params: {
          secret: '6LfJOhUrAAAAAOUB7a95_Zzinf_37o9TU6so-t1k',
          response: recaptchaToken
        }
      }
    );

    const { success, score } = verifyResponse.data;

    if (!success || score < 0.5) {
      console.warn('❌ Failed reCAPTCHA check:', verifyResponse.data);
      return res.status(403).json({ error: 'Failed reCAPTCHA validation.' });
    }
  } catch (err) {
    console.error('❌ Error verifying reCAPTCHA:', err);
    return res.status(500).json({ error: 'Failed to validate reCAPTCHA token.' });
  }

  // Field validation
  if (!hazardType || !location || !description) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  if (description.length > 1000 || location.length > 300) {
    return res.status(400).json({ error: 'Input too long.' });
  }

  const report = {
    timestamp: new Date().toISOString(),
    hazardType,
    location,
    description,
    ip: req.ip,
    userAgent: req.headers['user-agent']
  };

  // Save to JSON file
  const filePath = path.join(__dirname, 'hazard-reports.json');
  let reports = [];

  if (fs.existsSync(filePath)) {
    try {
      reports = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (e) {
      console.error('❌ Error reading file:', e);
    }
  }

  reports.push(report);

  try {
    fs.writeFileSync(filePath, JSON.stringify(reports, null, 2));
    console.log('Report saved:', report);
    res.status(200).json({ message: 'Report saved successfully' });
  } catch (e) {
    console.error('❌ Failed to write report:', e);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
