<template>
  <div class="min-h-screen bg-gradient-to-br from-mint-50 to-mint-100 pb-20">
    <!-- 상단 헤더 -->
    <div class="backdrop-blur-lg bg-white/70 p-6 border-b border-white/50 sticky top-0 z-10">
      <div class="flex justify-between items-center">
        <div>
          <h1 class="text-xl font-bold text-mint-800">안녕하세요, {{ userName }}님</h1>
          <p class="text-mint-600 text-sm">맞춤형 서비스를 확인해보세요</p>
        </div>
        <div class="flex space-x-2">
          <button class="p-2 rounded-full hover:bg-mint-100 transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-mint-800"><path d="M19 12h.01"/><path d="M12 12h.01"/><path d="M5 12h.01"/></svg>
          </button>
          <button class="p-2 rounded-full hover:bg-mint-100 transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-mint-800"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
          </button>
        </div>
      </div>
      
      <!-- 진단 카테고리 탭 -->
      <div class="flex space-x-2 mt-6 overflow-x-auto pb-2 scrollbar-hide">
        <button class="px-4 py-2 bg-mint-600 text-white rounded-full text-sm font-medium whitespace-nowrap">
          모든 서비스
        </button>
        <button class="px-4 py-2 bg-white/50 text-mint-800 rounded-full text-sm font-medium whitespace-nowrap">
          지역 프로그램
        </button>
        <button class="px-4 py-2 bg-white/50 text-mint-800 rounded-full text-sm font-medium whitespace-nowrap">
          심리상담
        </button>
        <button class="px-4 py-2 bg-white/50 text-mint-800 rounded-full text-sm font-medium whitespace-nowrap">
          디지털 기기 지원
        </button>
      </div>
    </div>
    
    <div class="p-6">
      <!-- 진단 결과 요약 -->
      <div class="backdrop-blur-lg bg-white/70 rounded-3xl shadow-xl p-6 border border-white/50 mb-6">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-lg font-semibold text-mint-800">진단 결과</h2>
          <router-link to="/psych-test" class="text-mint-600 text-sm font-medium">자세히 보기</router-link>
        </div>
        <div class="flex space-x-3">
          <div class="flex-1 bg-yellow-100 rounded-xl p-3 text-center">
            <div class="text-yellow-600 font-medium text-sm">학습</div>
            <div class="text-yellow-800 font-bold text-xl">주의</div>
          </div>
          <div class="flex-1 bg-mint-100 rounded-xl p-3 text-center">
            <div class="text-mint-600 font-medium text-sm">심리</div>
            <div class="text-mint-800 font-bold text-xl">양호</div>
          </div>
          <div class="flex-1 bg-red-100 rounded-xl p-3 text-center">
            <div class="text-red-600 font-medium text-sm">사회성</div>
            <div class="text-red-800 font-bold text-xl">위험</div>
          </div>
        </div>
      </div>
      
      <!-- 추천 서비스 -->
      <h2 class="text-lg font-semibold text-mint-800 mb-4">추천 서비스</h2>
      <div class="space-y-4">
        <!-- 멘토링 카드 -->
        <div class="backdrop-blur-lg bg-white/70 rounded-3xl shadow-lg p-4 border border-white/50">
          <div class="flex">
            <div class="w-20 h-20 bg-yellow-100 rounded-2xl flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-yellow-600"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <div class="ml-4 flex-1">
              <h3 class="font-semibold text-mint-800">1:1 멘토링 프로그램</h3>
              <p class="text-mint-600 text-sm mt-1">학습 및 사회성 향상을 위한 맞춤형 멘토링</p>
              <div class="flex justify-between items-center mt-2">
                <span class="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">주 2회</span>
                <button class="text-mint-600 text-sm font-medium">신청하기</button>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 심리상담 카드 -->
        <div class="backdrop-blur-lg bg-white/70 rounded-3xl shadow-lg p-4 border border-white/50">
          <div class="flex">
            <div class="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-600"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
            </div>
            <div class="ml-4 flex-1">
              <h3 class="font-semibold text-mint-800">전문 심리상담</h3>
              <p class="text-mint-600 text-sm mt-1">사회성 향상을 위한 전문가 상담 서비스</p>
              <div class="flex justify-between items-center mt-2">
                <span class="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">무료 지원</span>
                <router-link to="/counseling" class="text-mint-600 text-sm font-medium">예약하기</router-link>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 학습 지원 카드 -->
        <div class="backdrop-blur-lg bg-white/70 rounded-3xl shadow-lg p-4 border border-white/50">
          <div class="flex">
            <div class="w-20 h-20 bg-mint-100 rounded-2xl flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-mint-600"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
            </div>
            <div class="ml-4 flex-1">
              <h3 class="font-semibold text-mint-800">수학 학습 지원</h3>
              <p class="text-mint-600 text-sm mt-1">맞춤형 수학 학습 자료 및 튜터링</p>
              <div class="flex justify-between items-center mt-2">
                <span class="text-xs bg-mint-100 text-mint-800 px-2 py-1 rounded-full">온라인</span>
                <router-link to="/videos" class="text-mint-600 text-sm font-medium">시작하기</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 하단 네비게이션 -->
    <BottomNavigation />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useUserStore } from '@/stores/user'
import BottomNavigation from '@/components/common/BottomNavigation.vue'

const userStore = useUserStore()
const userName = computed(() => userStore.userName)
</script>