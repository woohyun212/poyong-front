<template>
  <div class="space-y-4">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="backdrop-blur-lg bg-white/70 rounded-3xl shadow-lg p-4 border border-white/50"
    >
      <div class="flex">
        <div class="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0" :class="item.bgColor">
          <component :is="item.icon" class="w-8 h-8" :class="item.iconColor" />
        </div>
        <div class="ml-4 flex-1">
          <h3 class="font-semibold text-mint-800">{{ item.title }}</h3>
          <p class="text-mint-600 text-sm mt-1">{{ item.description }}</p>
          <div class="flex justify-between items-center mt-2">
            <span class="text-xs" :class="item.badgeBgColor + ' ' + item.badgeTextColor + ' px-2 py-1 rounded-full'">{{ item.badgeText }}</span>
            <router-link :to="item.link" class="text-mint-600 text-sm font-medium">{{ item.linkText }}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
  }
})
</script>
