<script setup>
defineProps({
  video: Object
})
</script>

<template>
  <div class="backdrop-blur-lg bg-white/70 rounded-3xl shadow-lg overflow-hidden border border-white/50">
    <div class="relative">
      <img :src="video.thumbnail" :alt="video.title" class="w-full h-48 object-cover" />
      <div class="absolute inset-0 bg-black/30 flex items-center justify-center">
        <a :href="video.link" target="_blank" class="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        </a>
      </div>
    </div>
    <div class="p-4">
      <h3 class="font-semibold text-mint-800 mb-1">{{ video.title }}</h3>
      <p class="text-mint-600 text-xs mb-2">{{ video.reviewer }}</p>
      <div class="flex justify-between items-center">
        <span class="text-xs bg-mint-100 text-mint-800 px-2 py-1 rounded-full">{{ video.category }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* No additional styles yet */
</style>