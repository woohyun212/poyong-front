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
  animation: floatBlob 20s ease-in-out infinite;
}

.blob1 {
  background: #a5f3fc;
  width: 300px;
  height: 300px;
  top: 10%;
  left: 20%;
  animation-delay: 0s;
}

.blob2 {
  background: #fcd34d;
  width: 400px;
  height: 400px;
  top: 50%;
  left: 60%;
  animation-delay: 5s;
}

.blob3 {
  background: #fca5a5;
  width: 200px;
  height: 200px;
  top: 70%;
  left: 10%;
  animation-delay: 2.5s;
}

@keyframes floatBlob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  25% {
    transform: translate(100px, -60px) scale(1.1);
  }
  50% {
    transform: translate(-80px, 40px) scale(1.15);
  }
  75% {
    transform: translate(60px, 80px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.app-container {
  position: relative;
  min-height: 100vh;
  background: #f8f8f8;
  overflow: hidden;
}

</style>