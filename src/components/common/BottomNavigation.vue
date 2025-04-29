<template>
  <div class="fixed bottom-0 left-0 right-0 backdrop-blur-lg bg-white/70 border-t border-white/50 p-3 z-50">
    <div class="flex justify-around">
      <router-link to="/home" class="flex flex-col items-center p-2" active-class="text-mint-800">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-mint-600">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
        <span class="text-xs text-mint-600 mt-1">홈</span>
      </router-link>
      <router-link to="/chatbot" class="flex flex-col items-center p-2" active-class="text-mint-800">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-mint-600">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
        <span class="text-xs text-mint-600 mt-1">챗봇</span>
      </router-link>
      <router-link to="/facilities" class="flex flex-col items-center p-2" active-class="text-mint-800">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-mint-600">
          <circle cx="12" cy="10" r="3"/>
          <path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8z"/>
        </svg>
        <span class="text-xs text-mint-600 mt-1">지도</span>
      </router-link>
      <router-link to="/qr" class="flex flex-col items-center p-2" active-class="text-mint-800">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-mint-600">
          <path d="M3 3h4v4H3V3zM17 17h4v4h-4v-4zM17 3h4v4h-4V3zM3 17h4v4H3v-4zM7 7h10v10H7V7z"/>
        </svg>
        <span class="text-xs text-mint-600 mt-1">QR</span>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.router-link-active svg,
.router-link-active span {
  color: var(--mint-800);
  font-weight: 500;
}
</style>