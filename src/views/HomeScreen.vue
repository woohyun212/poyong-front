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
            <MoreHorizontal class="text-mint-800" />
          </button>
          <button class="p-2 rounded-full hover:bg-mint-100 transition">
            <Bell class="text-mint-800" />
          </button>
        </div>
      </div>
    </div>

    <!-- 학생 점수 표시 -->
    <div class="bg-white/50 backdrop-blur-md rounded-2xl p-4 mb-6 shadow mx-4 mt-4">
      <h2 class="text-lg font-semibold text-mint-800 mb-2">학생 점수</h2>
      <div class="grid grid-cols-3 gap-2 text-center">
        <div>
          <p class="text-sm text-mint-600">학습</p>
          <p class="text-xl font-bold text-mint-800">85</p>
        </div>
        <div>
          <p class="text-sm text-mint-600">정서</p>
          <p class="text-xl font-bold text-mint-800">90</p>
        </div>
        <div>
          <p class="text-sm text-mint-600">가정환경</p>
          <p class="text-xl font-bold text-mint-800">75</p>
        </div>
      </div>
    </div>

    <div class="p-6">
      <!-- 진단 결과 요약 -->
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-lg font-semibold text-mint-800">진단 결과</h2>
        <router-link to="/psych-test" class="text-mint-600 text-sm font-medium">자세히 보기</router-link>
      </div>
      <div class="backdrop-blur-lg bg-white/70 p-4 rounded-3xl shadow border border-white/50 flex space-x-3 mb-6">
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

<!--      <div class="backdrop-blur-lg bg-white/70 p-4 rounded-3xl shadow border border-white/50 mb-6">-->
        <CategoryTabs
          :categories="categories"
          :activeCategory="activeCategory"
          @change="selectCategory"
        />
<!--      </div>-->

      <!-- 추천 서비스 -->
      <h2 class="text-lg font-semibold text-mint-800 mt-4 mb-4">추천 서비스</h2>
      <RecommendationCard :items="filteredRecommendations" />
    </div>

    <!-- 하단 네비게이션 -->
    <BottomNavigation />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue"
import { useUserStore } from "@/stores/user"
import BottomNavigation from "@/components/common/BottomNavigation.vue"
import CategoryTabs from "@/components/home/CategoryTabs.vue"
import RecommendationCard from "@/components/home/RecommendationCard.vue"
import { recommendationData } from "@/data/recommendationData"
import { MoreHorizontal, Bell } from "lucide-vue-next"

const userStore = useUserStore()
const userName = computed(() => userStore.userName)

const categories = ["모든 서비스", "지역 프로그램", "심리상담", "디지털 기기 지원"]
const activeCategory = ref("모든 서비스")

const selectCategory = (category) => {
  activeCategory.value = category
}

const filteredRecommendations = computed(() => {
  return recommendationData[activeCategory.value] || []
})

onMounted(() => {
  if (localStorage.getItem("vueuse-color-scheme")) {
    document.documentElement.classList.add(localStorage.getItem("vueuse-color-scheme"))
  }
})
</script>