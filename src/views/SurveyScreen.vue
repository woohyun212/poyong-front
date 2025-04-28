<template>
  <div class="min-h-screen bg-gradient-to-br from-mint-50 to-mint-100 p-6">
    <div class="w-full max-w-md mx-auto">
      <div class="flex items-center mb-6">
        <button @click="$router.go(-1)" class="p-2 rounded-full hover:bg-white/50">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-mint-800"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <div class="flex-1 text-center">
          <h1 class="text-xl font-bold text-mint-800">진단 설문</h1>
        </div>
        <div class="w-10"></div>
      </div>
      
      <div class="backdrop-blur-lg bg-white/70 rounded-3xl shadow-xl p-6 border border-white/50 mb-6">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-semibold text-mint-800">진행 상황</h2>
          <span class="text-mint-600 font-medium">{{ currentQuestion }}/{{ totalQuestions }}</span>
        </div>
        <div class="w-full bg-mint-100 rounded-full h-2">
          <div class="bg-yellow-400 h-2 rounded-full" :style="{ width: `${progress}%` }"></div>
        </div>
      </div>
      
      <div class="space-y-6">
        <div class="backdrop-blur-lg bg-white/70 rounded-3xl shadow-xl p-6 border border-white/50">
          <h3 class="text-lg font-semibold text-mint-800 mb-4">학교에서 친구들과 잘 어울리나요?</h3>
          <div class="space-y-3">
            <label class="flex items-center p-3 rounded-xl border border-mint-100 hover:bg-mint-50 cursor-pointer transition">
              <input type="radio" name="question1" class="w-5 h-5 text-yellow-400 focus:ring-yellow-400" />
              <span class="ml-3 text-mint-800">네, 친구들과 잘 어울립니다</span>
            </label>
            <label class="flex items-center p-3 rounded-xl border border-mint-100 hover:bg-mint-50 cursor-pointer transition">
              <input type="radio" name="question1" class="w-5 h-5 text-yellow-400 focus:ring-yellow-400" />
              <span class="ml-3 text-mint-800">아니요, 친구 사귀기가 어렵습니다</span>
            </label>
          </div>
        </div>
        
        <div class="backdrop-blur-lg bg-white/70 rounded-3xl shadow-xl p-6 border border-white/50">
          <h3 class="text-lg font-semibold text-mint-800 mb-4">학습에 어려움을 느끼는 과목을 모두 선택해주세요</h3>
          <div class="space-y-3">
            <label class="flex items-center p-3 rounded-xl border border-mint-100 hover:bg-mint-50 cursor-pointer transition">
              <input type="checkbox" class="w-5 h-5 text-yellow-400 focus:ring-yellow-400" />
              <span class="ml-3 text-mint-800">국어</span>
            </label>
            <label class="flex items-center p-3 rounded-xl border border-mint-100 hover:bg-mint-50 cursor-pointer transition">
              <input type="checkbox" class="w-5 h-5 text-yellow-400 focus:ring-yellow-400" />
              <span class="ml-3 text-mint-800">수학</span>
            </label>
            <label class="flex items-center p-3 rounded-xl border border-mint-100 hover:bg-mint-50 cursor-pointer transition">
              <input type="checkbox" class="w-5 h-5 text-yellow-400 focus:ring-yellow-400" />
              <span class="ml-3 text-mint-800">영어</span>
            </label>
            <label class="flex items-center p-3 rounded-xl border border-mint-100 hover:bg-mint-50 cursor-pointer transition">
              <input type="checkbox" class="w-5 h-5 text-yellow-400 focus:ring-yellow-400" />
              <span class="ml-3 text-mint-800">사회</span>
            </label>
            <label class="flex items-center p-3 rounded-xl border border-mint-100 hover:bg-mint-50 cursor-pointer transition">
              <input type="checkbox" class="w-5 h-5 text-yellow-400 focus:ring-yellow-400" />
              <span class="ml-3 text-mint-800">과학</span>
            </label>
          </div>
        </div>
      </div>
      
      <div class="mt-8">
        <button @click="completeAndNavigate" class="w-full py-4 px-6 bg-mint-600 hover:bg-mint-700 text-white font-medium rounded-xl shadow-lg transition flex items-center justify-center">
          다음 질문
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const userStore = useUserStore()

const currentQuestion = ref(3)
const totalQuestions = ref(10)
const progress = ref(30) // 30%

const completeAndNavigate = () => {
  // 실제로는 설문 응답을 저장하고 진행 상태를 업데이트
  
  // 마지막 질문이면 결과 저장 후 홈으로 이동
  if (currentQuestion.value === totalQuestions.value) {
    // 진단 결과 저장
    userStore.setDiagnosisResults({
      learning: 'warning', // 주의
      psychological: 'good', // 양호
      social: 'danger' // 위험
    })
    
    // 홈 화면으로 이동
    router.push('/home')
  } else {
    // 다음 질문으로 진행 (실제로는 다음 질문 데이터 로드)
    currentQuestion.value++
    progress.value = (currentQuestion.value / totalQuestions.value) * 100
  }
}
</script>