<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { QrcodeStream } from 'vue3-qrcode-reader'

const inputCode = ref('')
const router = useRouter()
const showScanner = ref(false)

const verifyCode = () => {
  if (inputCode.value.trim() !== '') {
    router.push('/teacher-report')
  } else {
    alert('인증번호를 입력해주세요')
  }
}

const onDecode = (result) => {
  inputCode.value = result
  showScanner.value = false
}

const onInit = (promise) => {
  promise
    .then(() => {
      console.log('카메라 초기화 성공');
    })
    .catch(error => {
      console.error('카메라 접근 실패:', error);
    });
}
</script>

<template>
  <div class="flex justify-center items-center min-h-screen bg-black">
    <div class="relative w-full h-screen overflow-hidden">
      <!-- QR 카메라 스트림 -->
      <qrcode-stream
        class="absolute inset-0 z-0"
        style="width: 100%; height: 100%; object-fit: cover;"
        :paused="false"
        @decode="onDecode"
        @init="onInit"
      />

      <!-- 중앙 투명 영역을 제외한 어두운 오버레이 -->
      <div class="absolute inset-0 z-10 pointer-events-none">
        <div class="absolute top-0 left-0 right-0 h-[calc(50%-8rem)] bg-black opacity-35"></div>
        <div class="absolute bottom-0 left-0 right-0 h-[calc(50%-8rem)] bg-black opacity-35"></div>
        <div class="absolute top-[calc(50%-8rem)] bottom-[calc(50%-8rem)] left-0 w-[calc(50%-8rem)] bg-black opacity-35"></div>
        <div class="absolute top-[calc(50%-8rem)] bottom-[calc(50%-8rem)] right-0 w-[calc(50%-8rem)] bg-black opacity-35"></div>

        <!-- 스캔 박스 -->
        <div class="absolute top-1/2 left-1/2 w-64 h-64 border-4 border-yellow-400 rounded-xl bg-transparent transform -translate-x-1/2 -translate-y-1/2 z-20"></div>
      </div>

      <!-- UI 패널 -->
      <div class="absolute bottom-20 w-full flex justify-center z-20 px-6">
        <div class="w-full max-w-xs flex flex-col items-center space-y-4">
          <input
            v-model="inputCode"
            type="text"
            maxlength="7"
            placeholder="예: 482-157"
            class="w-full p-4 text-center border border-mint-300 rounded-full shadow text-lg tracking-widest bg-white"
          />
          <button
            @click="verifyCode"
            class="w-full bg-mint-600 hover:bg-mint-700 text-white font-bold py-3 px-6 rounded-full shadow transition"
          >
            인증하기
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
  background-color: black;
}
</style>