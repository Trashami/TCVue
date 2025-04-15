<template>
  <Header />
    <div class="min-h-[40vh] flex items-center justify-center bg-green-50 text-green-800 text-center p-8">
      <div>
        <h2 class="text-3xl font-bold mb-4">Thank you!</h2>
        <p>Your report has been successfully submitted.</p>
      </div>
    </div>
    <Footer />
  </template>
  
<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
</script>