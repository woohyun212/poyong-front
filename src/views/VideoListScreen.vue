<template>
  <div class="min-h-screen bg-gradient-to-br from-mint-50 to-mint-100 p-6 pb-20">
    <div class="w-full max-w-md mx-auto">
      <!-- 헤더 -->
      <div class="flex items-center mb-6">
        <button @click="$router.go(-1)" class="p-2 rounded-full hover:bg-white/50">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-mint-800"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <div class="flex-1 text-center">
          <h1 class="text-xl font-bold text-mint-800">추천 영상</h1>
        </div>
        <button class="p-2 rounded-full hover:bg-white/50">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-mint-800"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </button>
      </div>
      
      <!-- 카테고리 탭 -->
      <div class="flex space-x-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
        <button class="px-4 py-2 bg-mint-600 text-white rounded-full text-sm font-medium whitespace-nowrap">
          전체
        </button>
        <button class="px-4 py-2 bg-white/50 text-mint-800 rounded-full text-sm font-medium whitespace-nowrap">
          학습 도움
        </button>
        <button class="px-4 py-2 bg-white/50 text-mint-800 rounded-full text-sm font-medium whitespace-nowrap">
          심리 건강
        </button>
        <button class="px-4 py-2 bg-white/50 text-mint-800 rounded-full text-sm font-medium whitespace-nowrap">
          사회성 향상
        </button>
        <button class="px-4 py-2 bg-white/50 text-mint-800 rounded-full text-sm font-medium whitespace-nowrap">
          문화 이해
        </button>
      </div>
      
      <!-- 추천 영상 리스트 -->
      <div class="space-y-4">
        <!-- 영상 카드 1 -->
        <div class="backdrop-blur-lg bg-white/70 rounded-3xl shadow-lg overflow-hidden border border-white/50">
          <div class="relative">
            <img src="/placeholder.svg?height=180&width=320" alt="영상 썸네일" class="w-full h-48 object-cover" />
            <div class="absolute inset-0 bg-black/30 flex items-center justify-center">
              <button class="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              </button>
            </div>
            <span class="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-md backdrop-blur-sm">
              12:34
            </span>
          </div>
          <div class="p-4">
            <h3 class="font-semibold text-mint-800 mb-1">친구 사귀는 방법: 사회성 향상 가이드</h3>
            <p class="text-mint-600 text-sm mb-2 line-clamp-2">
              새로운 환경에서 친구를 사귀는 것이 어렵다면? 이 영상에서 실질적인 팁을 알아보세요.
            </p>
            <div class="flex justify-between items-center">
              <span class="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">사회성 향상</span>
              <div class="flex items-center text-xs text-mint-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                1,234
              </div>
            </div>
          </div>
        </div>
        
        <!-- 영상 카드 2 -->
        <div class="backdrop-blur-lg bg-white/70 rounded-3xl shadow-lg overflow-hidden border border-white/50">
          <div class="relative">
            <img src="/placeholder.svg?height=180&width=320" alt="영상 썸네일" class="w-full h-48 object-cover" />
            <div class="absolute inset-0 bg-black/30 flex items-center justify-center">
              <button class="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              </button>
            </div>
            <span class="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-md backdrop-blur-sm">
              08:45
            </span>
          </div>
          <div class="p-4">
            <h3 class="font-semibold text-mint-800 mb-1">수학 공부법: 기초부터 차근차근</h3>
            <p class="text-mint-600 text-sm mb-2 line-clamp-2">
              언어 장벽을 넘어 수학을 쉽게 이해하는 방법을 알려드립니다. 시각적 자료와 함께 설명해요.
            </p>
            <div class="flex justify-between items-center">
              <span class="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">학습 도움</span>
              <div class="flex items-center text-xs text-mint-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                2,567
              </div>
            </div>
          </div>
        </div>
        
        <!-- 영상 카드 3 -->
        <div class="backdrop-blur-lg bg-white/70 rounded-3xl shadow-lg overflow-hidden border border-white/50">
          <div class="relative">
            <img src="/placeholder.svg?height=180&width=320" alt="영상 썸네일" class="w-full h-48 object-cover" />
            <div class="absolute inset-0 bg-black/30 flex items-center justify-center">
              <button class="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              </button>
            </div>
            <span class="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-md backdrop-blur-sm">
              15:20
            </span>
          </div>
          <div class="p-4">
            <h3 class="font-semibold text-mint-800 mb-1">스트레스 관리와 마음 챙김 명상</h3>
            <p class="text-mint-600 text-sm mb-2 line-clamp-2">
              학교와 일상에서 느끼는 스트레스를 효과적으로 관리하는 방법과 간단한 명상 기법을 배워보세요.
            </p>
            <div class="flex justify-between items-center">
              <span class="text-xs bg-mint-100 text-mint-800 px-2 py-1 rounded-full">심리 건강</span>
              <div class="flex items-center text-xs text-mint-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                3,891
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 더 보기 버튼 -->
      <div class="mt-6">
        <button class="w-full py-3 px-6 bg-white hover:bg-gray-100 text-mint-800 font-medium rounded-xl shadow border border-mint-100 transition">
          더 많은 영상 보기
        </button>
      </div>
    </div>
    
    <!-- 하단 네비게이션 -->
    <BottomNavigation />
  </div>
</template>

<script setup>
import BottomNavigation from '@/components/common/BottomNavigation.vue'
</script>