<template>
    <!-- Top dark green bar with right-side links -->
    <div class="w-full h-[50px] flex">
      <!-- Logo section -->
      <div class="bg-[#124216] flex items-center px-6 w-[55vw]">
        <img src="/logo.png" alt="County Logo" class="h-[60px]" />
      </div>
  
      <!-- Right-side links -->
      <div class="flex w-[45vw] h-full text-white text-sm font-medium">
        <!-- Department Directory link with icon -->
        <div
          class="basis-[40%] bg-[#124216] flex items-center justify-center gap-2 border-r border-green-900"
        >
          <i class="mdi mdi-view-dashboard-outline text-white text-2xl"></i>
          <a
            href="http://county.tcweb.acsitefactory.com/department-directory"
            class="text-center"
            >Department Directory</a
          >
        </div>
  
        <!-- I need to... link -->
        <div
          class="basis-[60%] bg-[#49834A] flex items-center justify-center"
        >
          <a
            href="http://county.tcweb.acsitefactory.com/i-need-to"
            class="w-full text-center"
            >I need to... Pay my property taxes</a
          >
        </div>
      </div>
    </div>
  
    <!-- Secondary white nav bar -->
    <div
      class="bg-white w-full shadow h-[60px] flex items-center justify-between px-6"
    >
      <!-- Left side -->
      <div class="flex items-center">
        <h1 class="text-xl text-[#124216] font-bold">Tulare County</h1>
        <nav class="ml-6 text-[#124216] text-sm">
          <a href="#" class="mr-4 hover:underline">About Us</a>
          <!-- Add more links if needed -->
        </nav>
      </div>
  
      <!-- Right side icons -->
      <div class="flex h-full text-[#124216] border-l border-green-300 divide-x divide-green-300">
  <div class="w-[50px] flex items-center justify-center cursor-pointer hover:bg-gray-100">
    <i class="mdi mdi-web text-2xl"></i>
  </div>
  <div class="w-[50px] flex items-center justify-center cursor-pointer hover:bg-gray-100">
    <i class="mdi mdi-magnify text-2xl"></i>
  </div>
</div>

    </div>
  </template>
  