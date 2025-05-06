<template>
  <div class="min-h-screen bg-gradient-to-br from-mint-50 to-mint-100 pb-20">
    <!-- 헤더 -->
    <div class="backdrop-blur-lg bg-white/70 p-6 border-b border-white/50 sticky top-0 z-10">
      <div class="flex justify-between items-center">
        <div>
          <h1 class="text-xl font-bold text-mint-800">진단 결과</h1>
          <p class="text-mint-600 text-sm">맞춤형 지원 서비스를 확인해보세요</p>
        </div>
        <button @click="$router.push('/home')" class="p-2 rounded-full hover:bg-mint-100 transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-mint-800"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>
    </div>

    <div class="p-6 space-y-6">
      <!-- 종합 점수 -->
      <div class="backdrop-blur-lg bg-white/70 rounded-3xl shadow-xl p-6 border border-white/50">
        <h2 class="text-lg font-semibold text-mint-800 mb-4">종합 진단 결과</h2>
        <div class="flex items-center justify-center mb-6">
          <div class="w-32 h-32 rounded-full border-8 border-mint-300 flex items-center justify-center">
            <div class="text-center">
              <p class="text-3xl font-bold text-mint-800">{{ overallScore }}</p>
              <p class="text-sm text-mint-600">종합 점수</p>
            </div>
          </div>
        </div>
        <p class="text-mint-600 text-center mb-4">
          {{ userName }}님은 <span class="font-semibold text-mint-800">{{ getOverallStatus() }}</span> 상태입니다.
        </p>
        <div class="flex justify-center">
          <button @click="$router.push('/home')" class="bg-mint-600 hover:bg-mint-700 text-white font-medium py-2 px-6 rounded-xl shadow transition">
            맞춤 서비스 보기
          </button>
        </div>
      </div>

      <!-- 영역별 점수 -->
      <div class="backdrop-blur-lg bg-white/70 rounded-3xl shadow-xl p-6 border border-white/50">
        <h2 class="text-lg font-semibold text-mint-800 mb-4">영역별 점수</h2>
        
        <div class="space-y-4">
          <!-- 학습 영역 -->
          <div>
            <div class="flex justify-between items-center mb-1">
              <div class="flex items-center">
                <div class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-600"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
                </div>
                <span class="font-medium text-mint-800">학습 영역</span>
              </div>
              <div class="flex items-center">
                <span class="text-sm font-semibold" :class="getScoreColorClass(scores.learning)">{{ scores.learning }}점</span>
                <span class="ml-2 px-2 py-0.5 text-xs rounded-full" :class="getStatusBadgeClass(scores.learning)">{{ getStatusText(scores.learning) }}</span>
              </div>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5">
              <div class="h-2.5 rounded-full" :style="{ width: `${scores.learning}%` }" :class="getProgressBarClass(scores.learning)"></div>
            </div>
            <p class="text-sm text-mint-600 mt-2">{{ getLearningFeedback() }}</p>
          </div>

          <!-- 정서 영역 -->
          <div>
            <div class="flex justify-between items-center mb-1">
              <div class="flex items-center">
                <div class="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-pink-600"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                </div>
                <span class="font-medium text-mint-800">정서 영역</span>
              </div>
              <div class="flex items-center">
                <span class="text-sm font-semibold" :class="getScoreColorClass(scores.emotional)">{{ scores.emotional }}점</span>
                <span class="ml-2 px-2 py-0.5 text-xs rounded-full" :class="getStatusBadgeClass(scores.emotional)">{{ getStatusText(scores.emotional) }}</span>
              </div>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5">
              <div class="h-2.5 rounded-full" :style="{ width: `${scores.emotional}%` }" :class="getProgressBarClass(scores.emotional)"></div>
            </div>
            <p class="text-sm text-mint-600 mt-2">{{ getEmotionalFeedback() }}</p>
          </div>

          <!-- 가정환경 영역 -->
          <div>
            <div class="flex justify-between items-center mb-1">
              <div class="flex items-center">
                <div class="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-yellow-600"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                </div>
                <span class="font-medium text-mint-800">가정환경 영역</span>
              </div>
              <div class="flex items-center">
                <span class="text-sm font-semibold" :class="getScoreColorClass(scores.home)">{{ scores.home }}점</span>
                <span class="ml-2 px-2 py-0.5 text-xs rounded-full" :class="getStatusBadgeClass(scores.home)">{{ getStatusText(scores.home) }}</span>
              </div>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5">
              <div class="h-2.5 rounded-full" :style="{ width: `${scores.home}%` }" :class="getProgressBarClass(scores.home)"></div>
            </div>
            <p class="text-sm text-mint-600 mt-2">{{ getHomeFeedback() }}</p>
          </div>

          <!-- 디지털 접근성 영역 -->
          <div>
            <div class="flex justify-between items-center mb-1">
              <div class="flex items-center">
                <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-600"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
                </div>
                <span class="font-medium text-mint-800">디지털 접근성 영역</span>
              </div>
              <div class="flex items-center">
                <span class="text-sm font-semibold" :class="getScoreColorClass(scores.digital)">{{ scores.digital }}점</span>
                <span class="ml-2 px-2 py-0.5 text-xs rounded-full" :class="getStatusBadgeClass(scores.digital)">{{ getStatusText(scores.digital) }}</span>
              </div>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5">
              <div class="h-2.5 rounded-full" :style="{ width: `${scores.digital}%` }" :class="getProgressBarClass(scores.digital)"></div>
            </div>
            <p class="text-sm text-mint-600 mt-2">{{ getDigitalFeedback() }}</p>
          </div>
        </div>
      </div>

      <!-- 맞춤 추천 -->
      <div class="backdrop-blur-lg bg-white/70 rounded-3xl shadow-xl p-6 border border-white/50">
        <h2 class="text-lg font-semibold text-mint-800 mb-4">맞춤 추천 서비스</h2>
        
        <div class="space-y-3">
          <div v-for="(recommendation, index) in recommendations" :key="index" class="bg-white/50 rounded-xl p-4 flex items-start">
            <div class="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" :class="recommendation.bgColor">
              <component :is="recommendation.icon" class="w-5 h-5" :class="recommendation.iconColor" />
            </div>
            <div class="ml-3 flex-1">
              <h3 class="font-medium text-mint-800">{{ recommendation.title }}</h3>
              <p class="text-sm text-mint-600 mt-1">{{ recommendation.description }}</p>
              <router-link :to="recommendation.link" class="text-sm text-mint-600 font-medium mt-2 inline-block">
                {{ recommendation.linkText }} →
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- 다음 단계 -->
      <div class="flex space-x-3">
        <button @click="$router.push('/home')" class="flex-1 py-3 px-4 bg-mint-600 hover:bg-mint-700 text-white font-medium rounded-xl shadow transition flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          홈으로 이동
        </button>
        <button @click="$router.push('/counseling')" class="flex-1 py-3 px-4 bg-white hover:bg-gray-100 text-mint-800 font-medium rounded-xl shadow border border-mint-100 transition flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          상담 예약하기
        </button>
      </div>
    </div>

    <!-- 하단 네비게이션 -->
    <BottomNavigation />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from '@/stores/user'
import BottomNavigation from '@/components/common/BottomNavigation.vue'
import { Heart, Book, Home, Smartphone } from 'lucide-vue-next'
import api from "@/utils/axios.js";

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()
const userName = computed(() => userStore.userName)

// 실제 앱에서는 API에서 가져오거나 Pinia 스토어에서 관리할 데이터
const scores = ref({
  learning: 85,
  emotional: 70,
  home: 75,
  digital: 60
})

const overallScore = computed(() => {
  return Math.round((scores.value.learning + scores.value.emotional + scores.value.home + scores.value.digital) / 4)
})

// 점수에 따른 상태 텍스트
const getStatusText = (score) => {
  if (score >= 80) return '양호'
  if (score >= 60) return '주의'
  return '위험'
}

// 점수에 따른 상태 배지 클래스
const getStatusBadgeClass = (score) => {
  if (score >= 80) return 'bg-green-100 text-green-800'
  if (score >= 60) return 'bg-yellow-100 text-yellow-800'
  return 'bg-red-100 text-red-800'
}

// 점수에 따른 텍스트 색상 클래스
const getScoreColorClass = (score) => {
  let colorClass = ''
  if (score >= 80) colorClass = 'text-green-600'
  if (score >= 60) colorClass = 'text-yellow-600'
  colorClass = 'text-red-600'
  return colorClass
}

// 점수에 따른 프로그레스 바 클래스
const getProgressBarClass = (score) => {
  if (score >= 80) return 'bg-green-500'
  if (score >= 60) return 'bg-yellow-500'
  return 'bg-red-500'
}

// 종합 상태 텍스트
const getOverallStatus = () => {
  const score = overallScore.value
  if (score >= 80) return '전반적으로 양호한'
  if (score >= 60) return '일부 영역에서 지원이 필요한'
  return '여러 영역에서 집중 지원이 필요한'
}

// 영역별 피드백 텍스트
const getLearningFeedback = () => {
  const score = scores.value.learning
  if (score >= 80) return '학습 영역에서 양호한 상태를 보이고 있습니다. 현재 학습 방식을 유지하세요.'
  if (score >= 60) return '학습에 약간의 어려움이 있을 수 있습니다. 학습 지원 프로그램을 활용해보세요.'
  return '학습에 어려움을 겪고 있습니다. 맞춤형 학습 지원이 필요합니다.'
}

const getEmotionalFeedback = () => {
  const score = scores.value.emotional
  if (score >= 80) return '정서적으로 안정된 상태입니다. 현재 상태를 유지하세요.'
  if (score >= 60) return '정서적 지원이 일부 필요할 수 있습니다. 상담 서비스를 고려해보세요.'
  return '정서적 어려움을 겪고 있습니다. 전문적인 상담 서비스를 권장합니다.'
}

const getHomeFeedback = () => {
  const score = scores.value.home
  if (score >= 80) return '가정환경이 안정적입니다. 현재 상태를 유지하세요.'
  if (score >= 60) return '가정환경에 일부 지원이 필요할 수 있습니다. 가족 지원 서비스를 고려해보세요.'
  return '가정환경에 어려움이 있습니다. 가족 지원 서비스를 적극 활용하세요.'
}

const getDigitalFeedback = () => {
  const score = scores.value.digital
  if (score >= 80) return '디지털 접근성이 좋은 상태입니다. 현재 상태를 유지하세요.'
  if (score >= 60) return '디지털 접근성에 일부 제한이 있을 수 있습니다. 디지털 기기 지원 서비스를 고려해보세요.'
  return '디지털 접근성에 어려움이 있습니다. 디지털 기기 지원 및 교육 서비스를 적극 활용하세요.'
}

const generateRecommendations = (riskTags) => {
  const recs = []

  if (riskTags.includes("학습취약군")) {
    recs.push({
      title: '1:1 학습 멘토링',
      description: '학습 영역 향상을 위한 맞춤형 멘토링 프로그램입니다.',
      icon: Book,
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
      link: '/facilities',
      linkText: '멘토링 신청하기'
    })
  }

  if (riskTags.includes("정서위험군")) {
    recs.push({
      title: '심리 상담 서비스',
      description: '정서적 안정을 위한 전문 상담사와의 1:1 상담 서비스입니다.',
      icon: Heart,
      bgColor: 'bg-pink-100',
      iconColor: 'text-pink-600',
      link: '/counseling',
      linkText: '상담 예약하기'
    })
  }

  if (riskTags.includes("가정환경위험군")) {
    recs.push({
      title: '가정환경 지원 프로그램',
      description: '다문화, 한부모, 조손가정 등을 위한 지원 서비스입니다.',
      icon: Home,
      bgColor: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      link: '/facilities',
      linkText: '지원 정보 보기'
    })
  }

  if (riskTags.includes("디지털소외군")) {
    recs.push({
      title: '디지털 기기 지원',
      description: '학습에 필요한 디지털 기기를 대여해드립니다.',
      icon: Smartphone,
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600',
      link: '/facilities',
      linkText: '지원 신청하기'
    })
  }

  return recs
}

// 맞춤 추천 서비스
const recommendations = ref([])

onMounted(() => {
  fetchSurveyResults()
})

// 실제 앱에서는 API 호출 함수
const fetchSurveyResults = async () => {
  try {
    const { data } = await api.get(`/diagnosis/results/${route.params.survey_id}`)
    const { scores: backendScores, risk_tags } = data
    // Convert 한글 score keys to camelCase used in UI
    scores.value = {
      learning: backendScores["학습"],
      emotional: backendScores["정서"],
      home: backendScores["가정"],
      digital: backendScores["디지털"]
    }

    recommendations.value = generateRecommendations(risk_tags)
  } catch (error) {
    console.error('설문 결과를 가져오는데 실패했습니다:', error)
  }
}
</script>
