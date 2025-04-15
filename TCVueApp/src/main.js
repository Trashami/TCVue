import { createApp } from 'vue'
import router from './router'
import { VueReCaptcha } from 'vue-recaptcha-v3'
import './style.css'
import '@mdi/font/css/materialdesignicons.min.css'
import '@mdi/font/css/materialdesignicons.css'
import App from './App.vue'


const app = createApp(App)

app.use(VueReCaptcha, {
    siteKey: '6LfJOhUrAAAAAOFygsY0B8a6-HXmR6HM58CtJ6pD',
    loaderOptions: {
      autoHideBadge: true,
      useRecaptchaNet: true
    }
  })
  app.use(router)
  app.mount('#app')