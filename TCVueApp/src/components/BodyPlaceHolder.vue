<template>
  <div class="w-full min-h-[40vh] bg-[#f5f5f5] p-6 flex items-center justify-center">
    <form @submit.prevent="submitForm" class="space-y-4 max-w-2xl w-full bg-white p-6 rounded shadow">
      <h2 class="text-2xl font-bold text-[#124216] mb-4 text-center">Report a Road Hazard</h2>

      <div>
        <label class="block font-semibold mb-1 text-[#124216]">Hazard Type</label>
        <select v-model="form.hazardType" class="w-full border border-gray-300 rounded p-2">
          <option value="Pothole">Pothole</option>
          <option value="Dead Animal">Dead Animal</option>
          <option value="Debris">Debris</option>
          <option value="Flooding">Flooding</option>
        </select>
      </div>

      <div>
        <label class="block font-semibold mb-1 text-[#124216]">Location</label>
        <input v-model="form.location" type="text" class="w-full border border-gray-300 rounded p-2" placeholder="Street name, intersection, or coordinates" />
      </div>

      <div>
        <label class="block font-semibold mb-1 text-[#124216]">Description</label>
        <textarea v-model="form.description" class="w-full border border-gray-300 rounded p-2" rows="4" placeholder="Describe the hazard in detail"></textarea>
      </div>

      <div class="flex justify-end">
        <button type="submit" class="bg-[#124216] text-white px-6 py-2 rounded hover:bg-green-900 transition">
          Submit Report
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  hazardType: 'Pothole',
  location: '',
  description: ''
})

function submitForm() {
  console.log('Form submitted:', form.value)

  // TODO: send to custom API
  alert('Thank you for your report!')

  // Reset form
  form.value = {
    hazardType: 'Pothole',
    location: '',
    description: ''
  }
}
</script>
