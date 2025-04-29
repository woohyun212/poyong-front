<script setup>
import { ref, onMounted } from 'vue'
import BottomNavigation from '@/components/common/BottomNavigation.vue'

const qrImageUrl = ref('')
const authCode = ref('')

const fetchQRCode = async () => {
  // 서버 API 통신 부분 - 임시 더미 데이터
  qrImageUrl.value = '/dummy-qr.png'
  authCode.value = '482-157'
}

const refreshQRCode = async () => {
  await fetchQRCode()
}

onMounted(() => {
  fetchQRCode()
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-mint-50 to-mint-100 flex flex-col items-center justify-start p-6 space-y-6">
    <div class="text-center mt-6">
      <h1 class="text-xl font-bold text-mint-800">학생 QR 인증</h1>
      <p class="text-mint-600 text-sm mt-2">학생관리자가 QR을 스캔하면 리포트가 생성됩니다</p>
    </div>

    <div class="bg-white/90 backdrop-blur-lg rounded-2xl shadow-md p-6">
      <img :src="qrImageUrl" alt="학생 QR 코드" class="w-48 h-48 object-contain" />
    </div>

    <div class="text-center">
      <p class="text-mint-600 text-sm mb-1">인증번호</p>
      <p class="text-xl font-bold tracking-widest text-mint-800">{{ authCode }}</p>
    </div>

    <button @click="refreshQRCode" class="bg-mint-600 hover:bg-mint-700 text-white font-medium py-2 px-6 rounded-full shadow transition">
      QR 코드 재발급
    </button>

    <BottomNavigation />
  </div>
</template>

<style scoped>

</style>