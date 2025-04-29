<template>
  <div class="min-h-screen bg-gradient-to-br from-mint-50 to-mint-100 pb-20 flex flex-col">

    <!-- 헤더 -->
    <div class="backdrop-blur-lg bg-white/70 p-6 border-b border-white/50 sticky top-0 z-10">
      <h1 class="text-lg font-bold text-mint-800">AI 챗봇 상담</h1>
    </div>

    <!-- 채팅 내용 -->
    <div class="flex-1 overflow-y-auto p-4 space-y-4">
      <div v-for="(message, index) in messages" :key="index" class="flex" :class="message.sender === 'user' ? 'justify-end' : 'justify-start'">
        <template v-if="!message.type || message.type === 'text'">
          <div :class="message.sender === 'user' ? 'bg-mint-600 text-white' : 'bg-white/70 text-mint-800'" class="max-w-[75%] px-4 py-2 rounded-2xl shadow">
            {{ message.text }}
          </div>
        </template>
        <template v-else-if="message.type === 'card'">
          <div class="bg-white/90 rounded-2xl shadow-md p-4 max-w-[75%] space-y-2">
            <div class="text-mint-800 font-semibold">{{ message.title }}</div>
            <div class="text-mint-600 text-sm">{{ message.description }}</div>
            <a :href="message.buttonLink" class="block text-center bg-mint-600 hover:bg-mint-400 text-white py-2 rounded-lg text-sm font-medium transition">
              {{ message.buttonText }}
            </a>
          </div>
        </template>
      </div>
    </div>

    <!-- 입력창 -->
    <div class="p-4 backdrop-blur-lg bg-white/70 border-t border-white/50 flex">
      <input v-model="newMessage" @keyup.enter="handleEnter" type="text" placeholder="질문을 입력하세요" class="flex-1 px-4 py-2 rounded-2xl bg-white/50 text-mint-800 placeholder-mint-400 focus:outline-none">
      <button @click="sendMessage" class="ml-2 bg-mint-600 hover:bg-mint-700 text-white font-medium px-4 py-2 rounded-2xl shadow transition">
        전송
      </button>
    </div>

    <!-- 하단 네비게이션 -->
    <BottomNavigation />
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted } from 'vue'
import BottomNavigation from '@/components/common/BottomNavigation.vue'

const messages = ref([
  { sender: 'bot', text: '안녕하세요! 무엇을 도와드릴까요?' }
])

const newMessage = ref('')

const sendMessage = async () => {
  const text = newMessage.value.trim()
  if (text === '') return
  messages.value.push({ sender: 'user', text })
  newMessage.value = ''

  await nextTick()
}

onMounted(async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  messages.value.push({ sender: 'user', text: '요즘 우울하고 불안해요' })

  await new Promise(resolve => setTimeout(resolve, 800))
  messages.value.push({
    sender: 'bot',
    type: 'card',
    title: '정서 지원 프로그램 추천',
    description: '청소년 상담센터 1388을 이용할 수 있어요.',
    buttonText: '자세히 보기',
    buttonLink: '/facility'
  })

  await new Promise(resolve => setTimeout(resolve, 1200))
  messages.value.push({ sender: 'user', text: '한국에 적응하는데 어려움이 있어요' })

  await new Promise(resolve => setTimeout(resolve, 800))
  messages.value.push({
    sender: 'bot',
    type: 'card',
    title: '다문화 학생 지원 프로그램 추천',
    description: '한국어 학습과 학교 생활 적응을 도와드리는 프로그램을 안내해드릴게요.',
    buttonText: '지원 프로그램 보기',
    buttonLink: '/facility'
  })
})

const handleEnter = (e) => {
  if (e.isComposing) return; // Prevent sending during Korean typing
  sendMessage();
}
</script>