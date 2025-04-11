<template>
    <footer class="relative w-full min-h-[30vh] bg-[#124216] text-[#FBBC34] px-6 md:px-12 flex flex-col justify-between overflow-hidden">
      
      <!-- Top content section -->
      <div class="pt-10 flex flex-col md:flex-row justify-between items-start md:items-center z-10 relative">
        <!-- Left Side: Links -->
        <div class="space-y-4 md:space-y-0 md:space-x-6 flex flex-col md:flex-row text-sm font-medium">
          <a href="#" class="hover:underline">Accessibility</a>
          <span class="hidden md:inline">|</span>
          <a href="#" class="hover:underline">Compliance</a>
          <span class="hidden md:inline">|</span>
          <a href="#" class="hover:underline">Privacy Policy</a>
        </div>
  
        <!-- Right Side: Home link -->
        <a href="#" class="mt-6 md:mt-0 md:absolute md:top-6 md:right-12 text-sm font-medium hover:underline">
          Home
        </a>
      </div>
  
      <!-- Footer image on bottom right -->
      <div class="absolute bottom-0 right-0 z-0 opacity-90 max-w-[300px] pointer-events-none">
        <img
          src="http://county.tcweb.acsitefactory.com/sites/g/files/lwldkp151/files/2025-03/county-of-tulare-footer-illustration_0.png"
          alt="County of Tulare Seal"
          class="w-full h-auto"
        />
      </div>
    </footer>
  </template>
  