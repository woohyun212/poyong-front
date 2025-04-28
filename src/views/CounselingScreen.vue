<template>
  <div class="min-h-screen bg-gradient-to-br from-mint-50 to-mint-100 p-6 pb-20">
    <div class="w-full max-w-md mx-auto">
      <!-- 헤더 -->
      <div class="flex items-center mb-6">
        <button @click="$router.go(-1)" class="p-2 rounded-full hover:bg-white/50">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-mint-800"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <div class="flex-1 text-center">
          <h1 class="text-xl font-bold text-mint-800">상담 서비스</h1>
        </div>
        <div class="w-10"></div>
      </div>
      
      <!-- 상담 서비스 안내 -->
      <div class="backdrop-blur-lg bg-white/70 rounded-3xl shadow-xl p-6 border border-white/50 mb-6">
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-yellow-600"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </div>
          <div>
            <h2 class="font-semibold text-mint-800">청소년 상담 1388</h2>
            <p class="text-mint-600 text-sm">24시간 무료 상담 서비스</p>
          </div>
        </div>
        <p class="text-mint-600 text-sm mb-4">
          어떤 고민이든 전문 상담사와 익명으로 상담할 수 있습니다. 언제든지 도움을 요청하세요.
        </p>
        <a href="tel:1388" class="w-full py-3 px-6 bg-yellow-400 hover:bg-yellow-500 text-yellow-800 font-medium rounded-xl shadow-lg transition flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" stroke-width="2"  width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          1388 전화 상담
        </a>
      </div>
      
      <!-- 상담 옵션 -->
      <h2 class="text-lg font-semibold text-mint-800 mb-4">상담 방법 선택</h2>
      <div class="grid grid-cols-2 gap-4 mb-6">
        <div class="backdrop-blur-lg bg-white/70 rounded-3xl shadow-lg p-4 border border-white/50 text-center">
          <div class="w-12 h-12 bg-mint-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-mint-600"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          </div>
          <h3 class="font-semibold text-mint-800 mb-1">채팅 상담</h3>
          <p class="text-mint-600 text-xs mb-3">실시간 채팅으로 상담</p>
          <button class="w-full py-2 px-4 bg-mint-600 hover:bg-mint-700 text-white text-sm font-medium rounded-xl shadow transition">
            시작하기
          </button>
        </div>
        
        <div class="backdrop-blur-lg bg-white/70 rounded-3xl shadow-lg p-4 border border-white/50 text-center">
          <div class="w-12 h-12 bg-mint-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-mint-600"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/></svg>
          </div>
          <h3 class="font-semibold text-mint-800 mb-1">게시판 상담</h3>
          <p class="text-mint-600 text-xs mb-3">익명으로 고민 작성</p>
          <button class="w-full py-2 px-4 bg-mint-600 hover:bg-mint-700 text-white text-sm font-medium rounded-xl shadow transition">
            글쓰기
          </button>
        </div>
      </div>
      
      <!-- 전문 상담사 -->
      <h2 class="text-lg font-semibold text-mint-800 mb-4">전문 상담사</h2>
      <div class="space-y-4">
        <div class="backdrop-blur-lg bg-white/70 rounded-3xl shadow-lg p-4 border border-white/50">
          <div class="flex">
            <div class="w-16 h-16 bg-gray-200 rounded-2xl overflow-hidden flex-shrink-0">
              <img src="/placeholder.svg?height=64&width=64" alt="상담사 이미지" class="w-full h-full object-cover" />
            </div>
            <div class="ml-4 flex-1">
              <div class="flex justify-between items-start">
                <div>
                  <h3 class="font-semibold text-mint-800">김지원 상담사</h3>
                  <p class="text-mint-600 text-xs">청소년 심리 전문</p>
                </div>
                <span class="bg-mint-100 text-mint-800 text-xs px-2 py-1 rounded-full">한국어/영어</span>
              </div>
              <div class="flex items-center mt-1 mb-2">
                <div class="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#facc15" stroke="#facc15" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#facc15" stroke="#facc15" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#facc15" stroke="#facc15" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#facc15" stroke="#facc15" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#facc15" stroke="#facc15" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
                <span class="text-xs text-mint-600 ml-1">5.0 (24)</span>
              </div>
              <button class="w-full py-2 px-4 bg-mint-600 hover:bg-mint-700 text-white text-sm font-medium rounded-xl shadow transition">
                예약하기
              </button>
            </div>
          </div>
        </div>
        
        <div class="backdrop-blur-lg bg-white/70 rounded-3xl shadow-lg p-4 border border-white/50">
          <div class="flex">
            <div class="w-16 h-16 bg-gray-200 rounded-2xl overflow-hidden flex-shrink-0">
              <img src="/placeholder.svg?height=64&width=64" alt="상담사 이미지" class="w-full h-full object-cover" />
            </div>
            <div class="ml-4 flex-1">
              <div class="flex justify-between items-start">
                <div>
                  <h3 class="font-semibold text-mint-800">이수진 상담사</h3>
                  <p class="text-mint-600 text-xs">다문화 가정 전문</p>
                </div>
                <span class="bg-mint-100 text-mint-800 text-xs px-2 py-1 rounded-full">한국어/중국어</span>
              </div>
              <div class="flex items-center mt-1 mb-2">
                <div class="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#facc15" stroke="#facc15" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#facc15" stroke="#facc15" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#facc15" stroke="#facc15" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#facc15" stroke="#facc15" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ccfbef" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
                <span class="text-xs text-mint-600 ml-1">4.8 (19)</span>
              </div>
              <button class="w-full py-2 px-4 bg-mint-600 hover:bg-mint-700 text-white text-sm font-medium rounded-xl shadow transition">
                예약하기
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 게시판 상담 미리보기 -->
      <h2 class="text-lg font-semibold text-mint-800 mt-6 mb-4">게시판 상담</h2>
      <div class="backdrop-blur-lg bg-white/70 rounded-3xl shadow-xl p-6 border border-white/50">
        <div class="space-y-4">
          <div class="border-b border-mint-100 pb-4">
            <div class="flex justify-between items-start mb-2">
              <h3 class="font-semibold text-mint-800">학교에서 친구들과 어울리기 어려워요</h3>
              <span class="text-xs text-mint-600">2일 전</span>
            </div>
            <p class="text-mint-600 text-sm mb-2 line-clamp-2">
              한국에 온지 6개월 됐는데 아직도 친구를 사귀기가 어려워요. 어떻게 하면 좋을까요?
            </p>
            <div class="flex items-center text-xs text-mint-600">
              <span class="flex items-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                3
              </span>
              <span class="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">답변 완료</span>
            </div>
          </div>
          
          <div class="border-b border-mint-100 pb-4">
            <div class="flex justify-between items-start mb-2">
              <h3 class="font-semibold text-mint-800">수학 공부가 너무 어려워요</h3>
              <span class="text-xs text-mint-600">5일 전</span>
            </div>
            <p class="text-mint-600 text-sm mb-2 line-clamp-2">
              한국어로 수학 공부하는 게 너무 어려워요. 어떻게 하면 더 잘 이해할 수 있을까요?
            </p>
            <div class="flex items-center text-xs text-mint-600">
              <span class="flex items-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                5
              </span>
              <span class="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">답변 완료</span>
            </div>
          </div>
        </div>
        
        <button class="w-full py-3 px-6 bg-white hover:bg-gray-100 text-mint-800 font-medium rounded-xl shadow border border-mint-100 transition mt-4">
          더 보기
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