<template>
  <div class="app-container">
    <!-- 🔵 블러 배경 레이어 추가 -->
    <div class="bg-blobs">
      <div class="blob blob1"></div>
      <div class="blob blob2"></div>
      <div class="blob blob3"></div>
    </div>

    <!-- 🔸 메인 컨텐츠 (가로폭 제한, 반응형) -->
    <div class="page-container">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style>
.bg-blobs {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.5;
  mix-blend-mode: overlay;
}

.blob1 {
  background: #a5f3fc;
  width: 300px;
  height: 300px;
  top: 10%;
  left: 20%;
}

.blob2 {
  background: #fcd34d;
  width: 400px;
  height: 400px;
  top: 50%;
  left: 60%;
}

.blob3 {
  background: #fca5a5;
  width: 200px;
  height: 200px;
  top: 70%;
  left: 10%;
}

.app-container {
  position: relative;
  min-height: 100vh;
  background: #f8f8f8;
  overflow: hidden;
}

.page-container {
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  padding: 1rem;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
}

@media (min-width: 1024px) {
  .page-container {
    max-width: 900px;
  }
}
</style>