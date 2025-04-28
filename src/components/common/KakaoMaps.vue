<script setup>
import { ref, onMounted } from 'vue'

const mapContainer = ref(null)

onMounted(() => {
  if (window.kakao && window.kakao.maps && mapContainer.value) {
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    }
    const mapInstance = new kakao.maps.Map(mapContainer.value, options)
  }
})
</script>

<template>
  <div ref="mapContainer" style="width: 100%; height: 70vh; z-index:10;"></div>
</template>

<style scoped>
</style>