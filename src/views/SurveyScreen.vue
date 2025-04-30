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
          <span class="text-mint-600 font-medium">{{ currentSection + 1 }}/{{ sections.length }}</span>
        </div>
        <div class="w-full bg-mint-100 rounded-full h-2">
          <div class="bg-yellow-400 h-2 rounded-full" :style="{ width: `${progress}%` }"></div>
        </div>
      </div>

      <div class="space-y-6">
        <div v-if="currentSection === 0" class="backdrop-blur-lg bg-white/70 rounded-3xl shadow-xl p-6 border border-white/50">
          <h3 class="text-lg font-semibold text-mint-800 mb-4">학습 영역</h3>
          <div class="space-y-6">
            <div v-for="q in learningQuestions" :key="q.key">
              <div class="mb-2 font-medium text-mint-700">{{ q.label }}</div>
              <div class="flex gap-2">
                <label v-for="n in 5" :key="n" class="flex flex-col items-center text-xs cursor-pointer">
                  <input type="radio"
                         :name="q.key"
                         :value="n"
                         class="w-5 h-5 text-yellow-400 focus:ring-yellow-400"
                         v-model="responses[q.key]" />
                  <span v-if="n === 1">전혀 아니다</span>
                  <span v-else-if="n === 3">보통이다</span>
                  <span v-else-if="n === 5">매우 그렇다</span>
                  <span v-else>&nbsp;</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div v-else-if="currentSection === 1" class="backdrop-blur-lg bg-white/70 rounded-3xl shadow-xl p-6 border border-white/50">
          <h3 class="text-lg font-semibold text-mint-800 mb-4">정서 영역</h3>
          <div class="space-y-6">
            <div v-for="q in emotionalQuestions" :key="q.key">
              <div class="mb-2 font-medium text-mint-700">{{ q.label }}</div>
              <div class="flex gap-2">
                <label v-for="n in 5" :key="n" class="flex flex-col items-center text-xs cursor-pointer">
                  <input type="radio"
                         :name="q.key"
                         :value="n"
                         class="w-5 h-5 text-yellow-400 focus:ring-yellow-400"
                         v-model="responses[q.key]" />
                  <span v-if="n === 1">전혀 아니다</span>
                  <span v-else-if="n === 3">보통이다</span>
                  <span v-else-if="n === 5">매우 그렇다</span>
                  <span v-else>&nbsp;</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div v-else-if="currentSection === 2" class="backdrop-blur-lg bg-white/70 rounded-3xl shadow-xl p-6 border border-white/50">
          <h3 class="text-lg font-semibold text-mint-800 mb-4">가정 환경 영역</h3>
          <div class="space-y-6">
            <div v-for="q in homeQuestions" :key="q.key">
              <div class="mb-2 font-medium text-mint-700">{{ q.label }}</div>
              <div class="flex gap-6">
                <label class="flex items-center cursor-pointer">
                  <input type="radio"
                         :name="q.key"
                         :value="true"
                         class="w-5 h-5 text-yellow-400 focus:ring-yellow-400"
                         v-model="responses[q.key]" />
                  <span class="ml-2">예</span>
                </label>
                <label class="flex items-center cursor-pointer">
                  <input type="radio"
                         :name="q.key"
                         :value="false"
                         class="w-5 h-5 text-yellow-400 focus:ring-yellow-400"
                         v-model="responses[q.key]" />
                  <span class="ml-2">아니오</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div v-else-if="currentSection === 3" class="backdrop-blur-lg bg-white/70 rounded-3xl shadow-xl p-6 border border-white/50">
          <h3 class="text-lg font-semibold text-mint-800 mb-4">디지털 접근성 영역</h3>
          <div class="space-y-6">
            <div v-for="q in digitalQuestions" :key="q.key">
              <div class="mb-2 font-medium text-mint-700">{{ q.label }}</div>
              <div class="flex gap-2">
                <label v-for="n in 5" :key="n" class="flex flex-col items-center text-xs cursor-pointer">
                  <input type="radio"
                         :name="q.key"
                         :value="n"
                         class="w-5 h-5 text-yellow-400 focus:ring-yellow-400"
                         v-model="responses[q.key]" />
                  <span v-if="n === 1">전혀 아니다</span>
                  <span v-else-if="n === 3">보통이다</span>
                  <span v-else-if="n === 5">매우 그렇다</span>
                  <span v-else>&nbsp;</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-8">
        <button @click="handleNext"
          class="w-full py-4 px-6 bg-mint-600 hover:bg-mint-700 text-white font-medium rounded-xl shadow-lg transition flex items-center justify-center">
          {{ isLastSection ? '제출' : '다음' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

// Survey questions definition
const learningQuestions = [
  { key: 'L1', label: '수업 내용을 이해하는 데 어려움이 있나요?' },
  { key: 'L2', label: '과제를 제때 제출하는 데 어려움이 있나요?' },
  { key: 'L3', label: '수업 시간에 집중하기 어렵나요?' },
  { key: 'L4', label: '스스로 공부 계획을 세우고 실천하나요?' },
  { key: 'L5', label: '학습에 대한 흥미나 동기가 부족하다고 느끼나요?' },
]
const emotionalQuestions = [
  { key: 'E1', label: '최근 슬프거나 우울한 기분을 자주 느끼나요?' },
  { key: 'E2', label: '불안하거나 걱정이 많다고 느끼나요?' },
  { key: 'E3', label: '화를 자주 내거나 짜증을 많이 내나요?' },
  { key: 'E4', label: '자신감이 부족하다고 느끼나요?' },
  { key: 'E5', label: '감정을 조절하는 데 어려움이 있나요?' },
]
const homeQuestions = [
  { key: 'H1', label: '가정에서 학습을 지원해줄 수 있는 환경이 있나요?' },
  { key: 'H2', label: '집에서 공부할 수 있는 조용한 공간이 있나요?' },
  { key: 'H3', label: '가정 내에서 갈등이나 문제가 자주 발생하나요?' },
  { key: 'H4', label: '가족과 충분한 대화를 나누고 있나요?' },
  { key: 'H5', label: '가정에서 정서적으로 안정감을 느끼나요?' },
]
const digitalQuestions = [
  { key: 'D1', label: '온라인 수업이나 학습 자료에 접근이 용이한가요?' },
  { key: 'D2', label: '개인적으로 사용할 수 있는 디지털 기기가 있나요?' },
  { key: 'D3', label: '인터넷 연결이 원활한가요?' },
  { key: 'D4', label: '디지털 기기 사용에 어려움이 있나요?' },
  { key: 'D5', label: '디지털 학습에 익숙하다고 느끼나요?' },
]

const responses = ref({})

const sections = ['learning', 'emotional', 'home', 'digital']
const currentSection = ref(0)
const isLastSection = computed(() => currentSection.value === sections.length - 1)

const router = useRouter()

const progress = computed(() => {
  return Math.round(((currentSection.value + 1) / sections.length) * 100)
})

function validateResponses() {
  let questionsToCheck = []
  if (sections[currentSection.value] === 'learning') {
    questionsToCheck = learningQuestions
  } else if (sections[currentSection.value] === 'emotional') {
    questionsToCheck = emotionalQuestions
  } else if (sections[currentSection.value] === 'home') {
    questionsToCheck = homeQuestions
  } else if (sections[currentSection.value] === 'digital') {
    questionsToCheck = digitalQuestions
  }
  for (const q of questionsToCheck) {
    if (
      !(q.key in responses.value) ||
      responses.value[q.key] === undefined ||
      responses.value[q.key] === null ||
      responses.value[q.key] === ''
    ) {
      return false
    }
  }
  return true
}

async function handleSubmit() {
  // Validate all questions before submit
  for (const section of sections) {
    let questionsToCheck = []
    if (section === 'learning') {
      questionsToCheck = learningQuestions
    } else if (section === 'emotional') {
      questionsToCheck = emotionalQuestions
    } else if (section === 'home') {
      questionsToCheck = homeQuestions
    } else if (section === 'digital') {
      questionsToCheck = digitalQuestions
    }
    for (const q of questionsToCheck) {
      if (
        !(q.key in responses.value) ||
        responses.value[q.key] === undefined ||
        responses.value[q.key] === null ||
        responses.value[q.key] === ''
      ) {
        window.alert('모든 문항에 응답해 주세요.')
        return
      }
    }
  }
  try {
    await axios.post('/api/diagnosis/submit', responses.value)
    window.alert('설문이 제출되었습니다.')
    router.push('/home')
  } catch (e) {
    window.alert('제출에 실패했습니다.')
    router.push('/home')
  }
}

function handleNext() {
  if (!validateResponses()) {
    window.alert('현재 섹션의 모든 문항에 응답해 주세요.')
    return
  }
  if (isLastSection.value) {
    handleSubmit()
  } else {
    currentSection.value++
  }
}
</script>