<template>
  <div class="page-container">
    <div class="min-h-screen bg-gradient-to-br from-mint-50 to-mint-100 pb-20">
      <!-- 헤더 -->
      <div class="relative">
        <!-- 프로그램 이미지 -->
        <div class="relative w-full h-64">
          <img :src="program.imageUrl" alt="프로그램 이미지" class="w-full h-full object-cover"/>
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <button @click="$router.go(-1)" class="absolute top-4 left-4 p-2 rounded-full bg-white/30 backdrop-blur-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="text-white">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          <div class="absolute bottom-4 left-4">
            <span class="bg-yellow-400 text-yellow-800 text-xs px-3 py-1 rounded-full font-medium">{{
                program.category
              }}</span>
          </div>
        </div>
      </div>

      <!-- 프로그램 정보 -->
      <div class="px-6 -mt-2 relative z-10">
        <div class="backdrop-blur-lg bg-white/70 rounded-3xl shadow-xl p-6 border border-white/50 mb-6">
          <h1 class="text-2xl font-bold text-mint-800 mb-2">{{ program.title }}</h1>

          <div class="flex items-center mb-4">
            <div class="flex">
              <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                   :fill="i <= Math.floor(program.rating) ? '#facc15' : '#e5e7eb'" stroke="#facc15" stroke-width="1"
                   stroke-linecap="round" stroke-linejoin="round" class="mr-0.5">
                <polygon
                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
            <span class="text-sm text-mint-600 ml-1">{{ program.rating }} ({{ program.reviewCount }})</span>
          </div>

          <p class="text-mint-600 mb-6">{{ program.description }}</p>

          <div class="space-y-3 mb-6">
            <div class="flex">
              <div class="w-8 h-8 rounded-full bg-mint-100 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     class="text-mint-600">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <div class="ml-3">
                <h3 class="text-sm font-medium text-mint-800">운영 기관</h3>
                <p class="text-sm text-mint-600">{{ program.organization }}</p>
              </div>
            </div>

            <div class="flex">
              <div class="w-8 h-8 rounded-full bg-mint-100 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     class="text-mint-600">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div class="ml-3">
                <h3 class="text-sm font-medium text-mint-800">지원 대상</h3>
                <p class="text-sm text-mint-600">{{ program.targetAudience }}</p>
              </div>
            </div>

            <div class="flex">
              <div class="w-8 h-8 rounded-full bg-mint-100 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     class="text-mint-600">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div class="ml-3">
                <h3 class="text-sm font-medium text-mint-800">운영 시간</h3>
                <p class="text-sm text-mint-600">{{ program.operatingHours }}</p>
              </div>
            </div>

            <div class="flex">
              <div class="w-8 h-8 rounded-full bg-mint-100 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     class="text-mint-600">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <div class="ml-3">
                <h3 class="text-sm font-medium text-mint-800">참가 비용</h3>
                <p class="text-sm text-mint-600">{{ program.cost }}</p>
              </div>
            </div>

            <div class="flex">
              <div class="w-8 h-8 rounded-full bg-mint-100 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     class="text-mint-600">
                  <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div class="ml-3">
                <h3 class="text-sm font-medium text-mint-800">연락처</h3>
                <p class="text-sm text-mint-600">{{ program.contact }}</p>
              </div>
            </div>
          </div>

          <div class="flex space-x-3">
            <a :href="`tel:${program.contact}`"
               class="flex-1 py-3 px-4 bg-white hover:bg-gray-100 text-mint-800 font-medium rounded-xl shadow border border-mint-100 transition flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
                <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              전화 문의
            </a>
            <button
                class="flex-1 py-3 px-4 bg-mint-600 hover:bg-mint-700 text-white font-medium rounded-xl shadow transition flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <line x1="19" x2="19" y1="8" y2="14"/>
                <line x1="16" x2="22" y1="11" y2="11"/>
              </svg>
              신청하기
            </button>
          </div>
        </div>

        <!-- 위치 정보 -->
        <div class="backdrop-blur-lg bg-white/70 rounded-3xl shadow-xl p-6 border border-white/50 mb-6">
          <h2 class="text-lg font-semibold text-mint-800 mb-4">위치 정보</h2>

          <div class="mb-4">
            <p class="text-mint-600 text-sm">{{ program.address }}</p>
          </div>

          <div id="map" class="w-full h-48 rounded-xl overflow-hidden mb-4"></div>

          <div class="flex space-x-3">
            <a
              :href="`https://map.kakao.com/link/to/${encodeURIComponent(program.title)},${latitude},${longitude}`"
              target="_blank"
              class="flex-1 py-3 px-4 bg-mint-600 hover:bg-mint-700 text-white font-medium rounded-xl shadow transition flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
                <circle cx="12" cy="10" r="3"/>
                <path
                    d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8z"/>
              </svg>
              길찾기
            </a>
            <button @click="copyAddress"
                    class="flex-1 py-3 px-4 bg-white hover:bg-gray-100 text-mint-800 font-medium rounded-xl shadow border border-mint-100 transition flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
              </svg>
              주소 복사
            </button>
          </div>
        </div>

        <!-- 리뷰 섹션 -->
        <div class="backdrop-blur-lg bg-white/70 rounded-3xl shadow-xl p-6 border border-white/50 mb-6">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-semibold text-mint-800">리뷰</h2>
            <button class="text-mint-600 text-sm font-medium">리뷰 작성</button>
          </div>

          <div class="space-y-4">
            <div v-for="(review, index) in program.reviews" :key="index"
                 class="border-b border-mint-100 pb-4 last:border-0 last:pb-0">
              <div class="flex justify-between items-start mb-2">
                <div>
                  <h3 class="font-semibold text-mint-800">{{ review.name }}</h3>
                  <div class="flex items-center">
                    <div class="flex">
                      <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                           viewBox="0 0 24 24" :fill="i <= review.rating ? '#facc15' : '#e5e7eb'" stroke="#facc15"
                           stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="mr-0.5">
                        <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <span class="text-xs text-mint-600">{{ review.date }}</span>
              </div>
              <p class="text-mint-600 text-sm">{{ review.comment }}</p>
            </div>
          </div>

          <button
              class="w-full py-3 px-6 bg-white hover:bg-gray-100 text-mint-800 font-medium rounded-xl shadow border border-mint-100 transition mt-4">
            모든 리뷰 보기
          </button>
        </div>
      </div>

      <!-- 하단 네비게이션 -->
      <BottomNavigation/>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted} from "vue"
import BottomNavigation from "@/components/common/BottomNavigation.vue"

// 더미 데이터
const program = ref({
  id: 1,
  title: "다문화 청소년 멘토링 프로그램",
  category: "교육 지원",
  description:
      "다문화 배경을 가진 청소년들이 학업과 사회 적응에 어려움을 겪지 않도록 1:1 멘토링을 제공하는 프로그램입니다. 대학생 멘토와 함께 학습을 돕고, 문화 체험 활동을 통해 한국 사회에 더 잘 적응할 수 있도록 지원합니다.",
  imageUrl: "/image1.png",
  organization: "서울시 다문화가족지원센터",
  targetAudience: "초등학교 4학년 ~ 중학교 3학년 다문화 가정 청소년",
  operatingHours: "매주 토요일 10:00 ~ 12:00",
  cost: "무료 (전액 지원)",
  contact: "02-1234-5678",
  address: "서울특별시 강남구 테헤란로 123 다문화지원센터 2층",
  rating: 4.8,
  reviewCount: 24,
  reviews: [
    {
      name: "김민지",
      rating: 5,
      date: "2023.10.15",
      comment:
          "멘토 선생님이 정말 친절하게 가르쳐주셔서 학교 수업을 따라가는데 많은 도움이 되었어요. 다른 친구들도 만나서 즐거웠습니다!",
    },
    {
      name: "이수진",
      rating: 4,
      date: "2023.09.22",
      comment:
          "아이가 처음에는 낯을 가렸는데, 지금은 매주 토요일을 기다릴 정도로 좋아합니다. 학교 성적도 많이 올랐어요.",
    },
  ],
})

const latitude = ref(37.5665)
const longitude = ref(126.9780)

onMounted(() => {
  if (window.kakao && window.kakao.maps) {
    initMap()
  } else {
    const interval = setInterval(() => {
      if (window.kakao && window.kakao.maps) {
        clearInterval(interval)
        initMap()
      }
    }, 300)
  }
})

function initMap() {
  const mapContainer = document.getElementById('map')
  const mapOption = {
    center: new kakao.maps.LatLng(37.5665, 126.9780),
    level: 3
  }

  const map = new kakao.maps.Map(mapContainer, mapOption)
  const geocoder = new kakao.maps.services.Geocoder()


  geocoder.addressSearch(program.value.address, (result, status) => {
    if (status === kakao.maps.services.Status.OK && result.length > 0) {
      const coords = new kakao.maps.LatLng(result[0].y, result[0].x)
      latitude.value = coords.getLat()
      longitude.value = coords.getLng()
      map.setCenter(coords)
      new kakao.maps.Marker({
        map: map,
        position: coords
      })
    } else {
      console.warn("주소 검색 실패, 기본 좌표 사용")
      const fallbackCoords = new kakao.maps.LatLng(37.5665, 126.9780)
      latitude.value = fallbackCoords.getLat()
      longitude.value = fallbackCoords.getLng()
      map.setCenter(fallbackCoords)
      new kakao.maps.Marker({
        map: map,
        position: fallbackCoords
      })
    }
  })
}

function copyAddress() {
  navigator.clipboard.writeText(program.value.address)
      .then(() => {
        alert('주소가 복사되었습니다.')
      })
      .catch(() => {
        alert('복사에 실패했습니다.')
      })
}
</script>