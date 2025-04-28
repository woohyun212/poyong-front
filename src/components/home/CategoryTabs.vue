<template>
  <div class="flex justify-center space-x-3 py-2">
    <button
      v-for="category in categories"
      :key="category"
      @click="$emit('change', category)"
      :class="[
        'px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-300',
        activeCategory === category
          ? 'bg-mint-700 text-white shadow-md'
          : 'bg-white text-black border border-mint-100 hover:bg-mint-600 hover:text-white'
      ]"
    >
      {{ category }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  categories: {
    type: Array,
    required: true,
  },
  activeCategory: {
    type: String,
    required: true,
  },
})
defineEmits(["change"])
</script>