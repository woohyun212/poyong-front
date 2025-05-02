<script setup>
import {onMounted} from 'vue'
import {useRouter} from 'vue-router'
import {useUserStore} from '@/stores/user'

const router = useRouter()
const userStore = useUserStore()

onMounted(() => {
  const query = new URLSearchParams(window.location.search)
  const token = query.get('token')
  const isNewUser = query.get('new') === '1'
  if (token) {
    localStorage.setItem('access_token', token)
    userStore.setToken(token)
    if (isNewUser) {
      router.replace('/survey')
    } else {
      router.replace('/home')
    }
  } else {
    console.error('No token found in query')
    router.replace('/login')
  }
})
</script>

<template>
  <div class="flex items-center justify-center h-screen text-center">
    <p class="text-lg text-mint-800 font-medium">카카오 로그인 처리 중입니다...</p>
  </div>
</template>