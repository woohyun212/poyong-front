<template>
  <div class="min-h-screen bg-gradient-to-br from-mint-50 to-mint-100 p-6 pb-20">
    <div class="w-full max-w-md mx-auto">
      <!-- 헤더 -->
      <div class="flex items-center mb-6">
        <button @click="$router.go(-1)" class="p-2 rounded-full hover:bg-white/50">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-mint-800"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <div class="flex-1 text-center">
          <h1 class="text-xl font-bold text-mint-800">주변 시설</h1>
        </div>
        <button class="p-2 rounded-full hover:bg-white/50">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-mint-800"><path d="M12 2v4"/><path d="M12 18v4"/><path d="m4.93 4.93 2.83 2.83"/><path d="m16.24 16.24 2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="m4.93 19.07 2.83-2.83"/><path d="m16.24 7.76 2.83-2.83"/></svg>
        </button>
      </div>


      <!--필터 옵션 -->
      <div class="flex space-x-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
        <button @click="activeCategory = '전체'" :class="activeCategory === '전체' ? 'bg-mint-600 text-white' : 'bg-white/50 text-mint-800'" class="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
          전체
        </button>
        <button @click="activeCategory = '상담 센터'" :class="activeCategory === '상담 센터' ? 'bg-mint-600 text-white' : 'bg-white/50 text-mint-800'" class="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
          상담 센터
        </button>
        <button @click="activeCategory = '학습 지원'" :class="activeCategory === '학습 지원' ? 'bg-mint-600 text-white' : 'bg-white/50 text-mint-800'" class="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
          학습 지원
        </button>
        <button @click="activeCategory = '문화 센터'" :class="activeCategory === '문화 센터' ? 'bg-mint-600 text-white' : 'bg-white/50 text-mint-800'" class="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
          문화 센터
        </button>
        <button @click="activeCategory = '복지 시설'" :class="activeCategory === '복지 시설' ? 'bg-mint-600 text-white' : 'bg-white/50 text-mint-800'" class="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
          복지 시설
        </button>
      </div>

      <!--시설 리스트 -->
      <div class="space-y-4">
        <FacilityCard
          v-for="facility in filteredFacilities"
          :key="facility.id"
          :facility="facility"
        />
      </div>

      <!--더 보기 버튼 -->
      <div class="mt-6">
        <button class="w-full py-3 px-6 bg-white hover:bg-gray-100 text-mint-800 font-medium rounded-xl shadow border border-mint-100 transition">
          더 많은 시설 보기
        </button>
      </div>
    </div>

    <!--하단 네비게이션 -->
    <BottomNavigation />
  </div>
</template>

<script setup>
import BottomNavigation from '@/components/common/BottomNavigation.vue'
import FacilityCard from '@/components/facility/facilityCard.vue'
import { facilityListData } from '@/data/facilityListData'
import { ref, computed, onMounted, watch } from 'vue'

const activeCategory = ref('전체')

const filteredFacilities = computed(() => {
  if (activeCategory.value === '전체') {
    return facilityListData
  }
  return facilityListData.filter(facility => facility.category === activeCategory.value)
})
</script>