<template>
  <div class="min-h-screen bg-gradient-to-br from-mint-50 to-mint-100 p-6 pb-20">
    <div class="w-full max-w-md mx-auto">
      <!-- 헤더 -->
      <div class="flex items-center mb-6">
        <button @click="$router.go(-1)" class="p-2 rounded-full hover:bg-white/50">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-mint-800"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <div class="flex-1 text-center">
          <h1 class="text-xl font-bold text-mint-800">주변 시설</h1>
        </div>
        <button class="p-2 rounded-full hover:bg-white/50">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-mint-800"><path d="M12 2v4"/><path d="M12 18v4"/><path d="m4.93 4.93 2.83 2.83"/><path d="m16.24 16.24 2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="m4.93 19.07 2.83-2.83"/><path d="m16.24 7.76 2.83-2.83"/></svg>
        </button>
      </div>
      
      <!-- 지도 미리보기 -->
      <div class="backdrop-blur-lg bg-white/70 rounded-3xl shadow-xl overflow-hidden border border-white/50 mb-6">
        <div class="relative h-48">
          <img src="/placeholder.svg?height=200&width=400" alt="지도 이미지" class="w-full h-full object-cover" />
          <div class="absolute bottom-4 right-4">
            <button class="bg-mint-600 hover:bg-mint-700 text-white text-sm font-medium py-2 px-4 rounded-xl shadow-lg transition flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
              전체 지도 보기
            </button>
          </div>
        </div>
      </div>
      
      <!--필터 옵션 -->
      <div class="flex space-x-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
        <button class="px-4 py-2 bg-mint-600 text-white rounded-full text-sm font-medium whitespace-nowrap">
          전체
        </button>
        <button class="px-4 py-2 bg-white/50 text-mint-800 rounded-full text-sm font-medium whitespace-nowrap">
          상담 센터
        </button>
        <button class="px-4 py-2 bg-white/50 text-mint-800 rounded-full text-sm font-medium whitespace-nowrap">
          학습 지원
        </button>
        <button class="px-4 py-2 bg-white/50 text-mint-800 rounded-full text-sm font-medium whitespace-nowrap">
          문화 센터
        </button>
        <button class="px-4 py-2 bg-white/50 text-mint-800 rounded-full text-sm font-medium whitespace-nowrap">
          복지 시설
        </button>
      </div>
      
      <!--시설 리스트 -->
      <div class="space-y-4">
        <!--시설 카드 1 -->
        <div class="backdrop-blur-lg bg-white/70 rounded-3xl shadow-lg p-4 border border-white/50">
          <div class="flex">
            <div class="w-16 h-16 bg-mint-100 rounded-2xl flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-mint-600"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
            </div>
            <div class="ml-4 flex-1">
              <div class="flex justify-between items-start">
                <div>
                  <h3 class="font-semibold text-mint-800">청소년상담복지센터</h3>
                  <p class="text-mint-600 text-xs">서울특별시 강남구 테헤란로 123</p>
                </div>
                <span class="bg-mint-100 text-mint-800 text-xs px-2 py-1 rounded-full">0.5km</span>
              </div>
              <div class="flex items-center mt-1 text-xs text-mint-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                02-1234-5678
              </div>
              <div class="flex space-x-2 mt-2">
                <button class="flex-1 py-1.5 px-3 bg-mint-600 hover:bg-mint-700 text-white text-xs font-medium rounded-lg shadow transition flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><circle cx="12" cy="10" r="3"/><path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8z"/></svg>
                  위치 보기
                </button>
                <button class="flex-1 py-1.5 px-3 bg-white hover:bg-gray-100 text-mint-800 text-xs font-medium rounded-lg shadow border border-mint-100 transition flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  전화하기
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <!--시설 카드 2 -->
        <div class="backdrop-blur-lg bg-white/70 rounded-3xl shadow-lg p-4 border border-white/50">
          <div class="flex">
            <div class="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-yellow-600"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
            </div>
            <div class="ml-4 flex-1">
              <div class="flex justify-between items-start">
                <div>
                  <h3 class="font-semibold text-mint-800">다문화가족지원센터</h3>
                  <p class="text-mint-600 text-xs">서울특별시 서초구 반포대로 45</p>
                </div>
                <span class="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">1.2km</span>
              </div>
              <div class="flex items-center mt-1 text-xs text-mint-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                02-5678-1234
              </div>
              <div class="flex space-x-2 mt-2">
                <button class="flex-1 py-1.5 px-3 bg-mint-600 hover:bg-mint-700 text-white text-xs font-medium rounded-lg shadow transition flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><circle cx="12" cy="10" r="3"/><path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8z"/></svg>
                  위치 보기
                </button>
                <button class="flex-1 py-1.5 px-3 bg-white hover:bg-gray-100 text-mint-800 text-xs font-medium rounded-lg shadow border border-mint-100 transition flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  전화하기
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <!--시설 카드 3 -->
        <div class="backdrop-blur-lg bg-white/70 rounded-3xl shadow-lg p-4 border border-white/50">
          <div class="flex">
            <div class="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-600"><path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"/><path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"/><path d="M12 3v6"/></svg>
            </div>
            <div class="ml-4 flex-1">
              <div class="flex justify-between items-start">
                <div>
                  <h3 class="font-semibold text-mint-800">글로벌 학습지원센터</h3>
                  <p class="text-mint-600 text-xs">서울특별시 강남구 삼성로 78</p>
                </div>
                <span class="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">2.3km</span>
              </div>
              <div class="flex items-center mt-1 text-xs text-mint-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                02-9876-5432
              </div>
              <div class="flex space-x-2 mt-2">
                <button class="flex-1 py-1.5 px-3 bg-mint-600 hover:bg-mint-700 text-white text-xs font-medium rounded-lg shadow transition flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><circle cx="12" cy="10" r="3"/><path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8z"/></svg>
                  위치 보기
                </button>
                <button class="flex-1 py-1.5 px-3 bg-white hover:bg-gray-100 text-mint-800 text-xs font-medium rounded-lg shadow border border-mint-100 transition flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  전화하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!--더 보기 버튼 -->
      <div class="mt-6">
        <button class="w-full py-3 px-6 bg-white hover:bg-gray-100 text-mint-800 font-medium rounded-xl shadow border border-mint-100 transition">
          더 많은 시설 보기
        </button>
      </div>
    </div>
    
    <!--하단 네비게이션 -->
    <BottomNavigation />
  </div>
</template>

<script setup>
import BottomNavigation from '@/components/common/BottomNavigation.vue'
</script>