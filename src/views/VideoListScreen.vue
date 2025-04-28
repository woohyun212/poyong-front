<template>
  <div class="min-h-screen bg-gradient-to-br from-mint-50 to-mint-100 pb-20">
    <!-- 상단 헤더 -->
    <div class="backdrop-blur-lg bg-white/70 p-6 border-b border-white/50 sticky top-0 z-10">
      <h1 class="text-xl font-bold text-mint-800">추천 영상</h1>
      <p class="text-mint-600 text-sm mt-1">심리 건강, 학업, 대인관계 주제 추천</p>
    </div>

    <!-- 카테고리 탭 -->
    <div class="sticky top-[72px] bg-mint-50 z-10">
      <CategoryTabs
        :categories="['전체', '학습 도움', '심리 건강', '사회성 향상', '문화 이해']"
        :activeCategory="activeCategory"
        @change="selectCategory"
      />
    </div>

    <!-- 추천 영상 리스트 -->
    <div class="p-6 space-y-4">
      <VideoCard
        v-for="(video, index) in filteredVideoList"
        :key="index"
        :video="video"
      />
    </div>

    <!-- 하단 네비게이션 -->
    <BottomNavigation />
  </div>
</template>

<script setup>
import BottomNavigation from '@/components/common/BottomNavigation.vue'
import CategoryTabs from '@/components/home/CategoryTabs.vue'
import VideoCard from '@/components/video/VideoCard.vue'
import { videoListData } from '@/data/videoListData'
import { ref, computed } from 'vue'

const activeCategory = ref('전체')
const selectCategory = (category) => {
  activeCategory.value = category
}

const categoryMap = {
  '전체': [],
  '학습 도움': ['학업/진로'],
  '심리 건강': ['정신건강'],
  '사회성 향상': ['대인관계'],
  '문화 이해': ['가정폭력', '근로권익', '과의존']
}

const filteredVideoList = computed(() => {
  if (activeCategory.value === '전체') {
    return videoListData
  }
  const allowedCategories = categoryMap[activeCategory.value] || []
  return videoListData.filter(video => allowedCategories.includes(video.category))
})
</script>