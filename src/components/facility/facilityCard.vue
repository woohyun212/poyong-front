<script setup>
import {computed, ref, watch, nextTick} from 'vue'

const props = defineProps({
  facility: Object
})

const iconBgClass = computed(() => {
  switch (props.facility.category) {
    case '상담 센터':
      return 'bg-blue-100'
    case '복지 시설':
      return 'bg-green-100'
    case '학습 지원':
      return 'bg-yellow-100'
    case '문화 센터':
      return 'bg-purple-100'
    default:
      return 'bg-mint-100'
  }
})

const iconColorClass = computed(() => {
  switch (props.facility.category) {
    case '상담 센터':
      return 'text-blue-600'
    case '복지 시설':
      return 'text-green-600'
    case '학습 지원':
      return 'text-yellow-600'
    case '문화 센터':
      return 'text-purple-600'
    default:
      return 'text-mint-600'
  }
})

const showMap = ref(false)

const toggleMap = () => {
  showMap.value = !showMap.value
}

const openDirections = () => {
  const query = encodeURIComponent(props.facility.address)
  window.open(`https://map.kakao.com/link/search/${query}`, '_blank')
}

watch(showMap, async (newVal) => {
  if (newVal) {
    await nextTick() // Wait for the DOM update after v-if
    const container = document.getElementById('map-' + props.facility.id)
    if (!container) {
      console.error('지도 컨테이너를 찾을 수 없습니다:', 'map-' + props.facility.id)
      return
    }

    const width = container.offsetWidth
    const height = container.offsetHeight
    if (width === 0 || height === 0) {
      console.error('지도 컨테이너 크기가 0입니다.', width, height)
      return
    }

    const options = {
      center: new kakao.maps.LatLng(37.4979, 127.0276),
      level: 4
    }
    const map = new kakao.maps.Map(container, options)

    const geocoder = new kakao.maps.services.Geocoder()
    geocoder.addressSearch(props.facility.address, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x)
        map.setCenter(coords)
        new kakao.maps.Marker({
          map: map,
          position: coords
        })
      } else {
        console.error('주소 검색 실패:', props.facility.address)
      }
    })
  }
})
</script>

<template>
  <div class="backdrop-blur-lg bg-white/70 rounded-3xl shadow-lg p-4 border border-white/50">
    <div class="flex">
      <div class="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0" :class="iconBgClass">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
             :class="iconColorClass">
          <path
              d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
        </svg>
      </div>
      <div class="ml-4 flex flex-1 flex-row justify-between">
        <div>
          <div class="flex justify-between items-start">
            <div>
              <h3 class="font-semibold text-mint-800">{{ facility.name }}</h3>
              <p class="text-mint-600 text-xs">{{ facility.address }}</p>
            </div>
          </div>
          <div class="flex items-center mt-1 text-xs text-mint-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1">
              <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            {{ facility.phone }}
          </div>
        </div>
        <div class="flex flex-col items-end justify-center h-full">
          <div class="flex items-center h-full">
            <button @click="toggleMap"
                    class="border-l border-mint-600 text-mint-800 text-sm font-bold pl-4 pr-6 h-full">
              {{ showMap ? '접기' : '위치' }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 지도 영역 -->
    <div v-if="showMap" class="mt-4 relative">
      <div :id="'map-' + facility.id" class="w-full h-48 rounded-2xl overflow-hidden"></div>
      <div class="absolute bottom-4 right-4 z-20">
        <button @click="openDirections"
                class="bg-mint-600 hover:bg-mint-700 text-white text-sm font-medium py-2 px-4 rounded-xl shadow-lg transition flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1">
            <path d="M15 3h6v6"/>
            <path d="M10 14 21 3"/>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          </svg>
          길찾기
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Scoped styles are intentionally left empty */
</style>