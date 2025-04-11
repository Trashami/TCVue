<template>
<div class="min-h-screen w-full flex flex-col bg-color: #124216">
    <div class="w-full flex-1 overflow-auto">
      <Header />
      <BodyPlaceHolder />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import BodyPlaceHolder from './components/BodyPlaceHolder.vue'
import Footer from './components/Footer.vue'
</script>

<style scoped>
</style>
