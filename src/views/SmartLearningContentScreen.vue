<template>
  <div class="min-h-screen bg-gradient-to-br from-mint-50 to-mint-100 pb-20">
    <div class="backdrop-blur-lg bg-white/70 p-6 border-b border-white/50 sticky top-0 z-10">
      <h1 class="text-xl font-bold text-mint-800">디지털 배움터 콘텐츠</h1>
      <p class="text-mint-600 text-sm mt-1">체험, 영상, 기초 교육 등 다양한 디지털 콘텐츠를 만나보세요.</p>
    </div>

    <div class="p-4 grid grid-cols-1 gap-4">
      <div
        v-for="(item, index) in smartLearningContentData"
        :key="index"
        class="bg-white/70 rounded-xl shadow-md p-4 flex space-x-4 items-center"
      >
        <img :src="item.thumbnail" alt="thumbnail" class="w-20 h-20 rounded-lg object-cover flex-shrink-0" />
        <div class="flex-1">
          <h2 class="text-mint-800 font-semibold">{{ item.title }}</h2>
          <p class="text-sm text-mint-600 mt-1">{{ item.category }}</p>
          <p class="text-xs text-gray-500 mt-1">감수자: {{ item.reviewer }}</p>
          <a :href="item.link" target="_blank" class="text-sm text-mint-600 font-medium mt-2 inline-block">콘텐츠 바로가기 →</a>
        </div>
      </div>
    </div>
    <!-- 하단 네비게이션 -->
    <BottomNavigation />
  </div>
</template>

<script setup>
import { smartLearningContentData } from "@/data/smartLearningContentData"
import BottomNavigation from "@/components/common/BottomNavigation.vue"
</script>