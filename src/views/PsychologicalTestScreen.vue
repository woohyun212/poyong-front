<template>
  <div class="min-h-screen bg-gradient-to-br from-mint-50 to-mint-100 p-6">
    <div class="w-full max-w-md mx-auto">
      <!-- 헤더 -->
      <div class="flex items-center mb-6">
        <button @click="$router.go(-1)" class="p-2 rounded-full hover:bg-white/50">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-mint-800"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <div class="flex-1 text-center">
          <h1 class="text-xl font-bold text-mint-800">심리검사</h1>
        </div>
        <div class="w-10"></div>
      </div>
      
      <!-- 검사 설명 -->
      <div v-if="testState === 'intro'" class="backdrop-blur-lg bg-white/70 rounded-3xl shadow-xl p-6 border border-white/50 mb-6">
        <h2 class="text-lg font-semibold text-mint-800 mb-3">사회성 검사</h2>
        <p class="text-mint-600 mb-4">
          이 검사는 학생의 사회적 관계와 적응력을 평가하는 검사입니다. 약 10분 정도 소요됩니다.
        </p>
        <div class="flex space-x-3 mb-4">
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-mint-600 mr-1"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span class="text-xs text-mint-600">10분 소요</span>
          </div>
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-mint-600 mr-1"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
            <span class="text-xs text-mint-600">개인정보 보호</span>
          </div>
        </div>
        <button @click="startTest" class="w-full py-3 px-6 bg-mint-600 hover:bg-mint-700 text-white font-medium rounded-xl shadow-lg transition">
          검사 시작하기
        </button>
      </div>
      
      <!-- 검사 진행 화면 -->
      <div v-if="testState === 'progress'" class="backdrop-blur-lg bg-white/70 rounded-3xl shadow-xl p-6 border border-white/50 mb-6">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-semibold text-mint-800">질문 {{ currentQuestion }}/{{ totalQuestions }}</h2>
          <span class="text-mint-600 font-medium">{{ progress }}% 완료</span>
        </div>
        <div class="w-full bg-mint-100 rounded-full h-2 mb-6">
          <div class="bg-yellow-400 h-2 rounded-full" :style="{ width: `${progress}%` }"></div>
        </div>
        <h3 class="text-lg font-semibold text-mint-800 mb-4">
          나는 새로운 친구를 사귀는 것이 어렵게 느껴진다.
        </h3>
        
        <div class="space-y-3 mb-6">
          <label class="flex items-center p-4 rounded-xl border border-mint-100 hover:bg-mint-50 cursor-pointer transition">
            <input type="radio" name="question5" class="w-5 h-5 text-yellow-400 focus:ring-yellow-400" />
            <span class="ml-3 text-mint-800">매우 그렇다</span>
          </label>
          <label class="flex items-center p-4 rounded-xl border border-mint-100 hover:bg-mint-50 cursor-pointer transition">
            <input type="radio" name="question5" class="w-5 h-5 text-yellow-400 focus:ring-yellow-400" />
            <span class="ml-3 text-mint-800">그렇다</span>
          </label>
          <label class="flex items-center p-4 rounded-xl border border-mint-100 hover:bg-mint-50 cursor-pointer transition">
            <input type="radio" name="question5" class="w-5 h-5 text-yellow-400 focus:ring-yellow-400" />
            <span class="ml-3 text-mint-800">보통이다</span>
          </label>
          <label class="flex items-center p-4 rounded-xl border border-mint-100 hover:bg-mint-50 cursor-pointer transition">
            <input type="radio" name="question5" class="w-5 h-5 text-yellow-400 focus:ring-yellow-400" />
            <span class="ml-3 text-mint-800">그렇지 않다</span>
          </label>
          <label class="flex items-center p-4 rounded-xl border border-mint-100 hover:bg-mint-50 cursor-pointer transition">
            <input type="radio" name="question5" class="w-5 h-5 text-yellow-400 focus:ring-yellow-400" />
            <span class="ml-3 text-mint-800">전혀 그렇지 않다</span>
          </label>
        </div>
        
        <div class="flex space-x-3">
          <button @click="prevQuestion" class="flex-1 py-3 px-6 bg-white hover:bg-gray-100 text-mint-800 font-medium rounded-xl shadow border border-mint-100 transition flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="m15 18-6-6 6-6"/></svg>
            이전
          </button>
          <button @click="nextQuestion" class="flex-1 py-3 px-6 bg-mint-600 hover:bg-mint-700 text-white font-medium rounded-xl shadow-lg transition flex items-center justify-center">
            다음
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </div>
      
      <!-- 검사 결과 화면 -->
      <div v-if="testState === 'result'" class="backdrop-blur-lg bg-white/70 rounded-3xl shadow-xl p-6 border border-white/50">
        <div class="text-center mb-6">
          <div class="inline-block p-3 bg-red-100 rounded-full mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-600"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
          </div>
          <h2 class="text-xl font-bold text-mint-800 mb-1">사회성 위험군</h2>
          <p class="text-mint-600">전문적인 상담이 필요합니다</p>
        </div>
        
        <div class="bg-white/50 rounded-2xl p-4 mb-6">
          <h3 class="font-semibold text-mint-800 mb-2">검사 결과 요약</h3>
          <p class="text-mint-600 text-sm mb-4">
            사회적 상호작용과 또래 관계 형성에 어려움을 겪고 있습니다. 전문적인 상담과 사회성 향상 프로그램 참여를 권장합니다.
          </p>
          <div class="flex space-x-2">
            <div class="flex-1 h-4 bg-mint-100 rounded-full overflow-hidden">
              <div class="bg-red-500 h-full" style="width: 75%"></div>
            </div>
            <span class="text-red-600 font-medium">75점</span>
          </div>
        </div>
        
        <div class="space-y-3 mb-6">
          <div class="flex items-center p-3 bg-yellow-50 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-yellow-600 mr-3"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            <div class="text-sm text-yellow-800">
              <span class="font-medium">주의:</span> 이 결과는 참고용이며 전문가의 정확한 진단을 대체할 수 없습니다.
            </div>
          </div>
        </div>
        
        <div class="space-y-3">
          <router-link to="/counseling" class="block w-full py-3 px-6 bg-mint-600 hover:bg-mint-700 text-white font-medium rounded-xl shadow-lg transition text-center">
            맞춤형 상담 예약하기
          </router-link>
          <button @click="$router.push('/home')" class="w-full py-3 px-6 bg-white hover:bg-gray-100 text-mint-800 font-medium rounded-xl shadow border border-mint-100 transition">
            결과 저장하기
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const testState = ref('intro') // 'intro', 'progress', 'result'
const currentQuestion = ref(5)
const totalQuestions = ref(20)
const progress = ref(25) // 25%

const startTest = () => {
  testState.value = 'progress'
}

const nextQuestion = () => {
  if (currentQuestion.value < totalQuestions.value) {
    currentQuestion.value++
    progress.value = (currentQuestion.value / totalQuestions.value) * 100
  } else {
    testState.value = 'result'
  }
}

const prevQuestion = () => {
  if (currentQuestion.value > 1) {
    currentQuestion.value--
    progress.value = (currentQuestion.value / totalQuestions.value) * 100
  }
}
</script>