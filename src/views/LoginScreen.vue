<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-mint-50 to-mint-100 p-6">
    <div class="w-full max-w-md backdrop-blur-lg bg-white/70 rounded-3xl shadow-xl p-8 border border-white/50">
      <div class="text-center mb-10">
        <h1 class="text-3xl font-bold text-mint-800 mb-2">함께 성장해요</h1>
        <p class="text-mint-600">다문화/위기학생을 위한 맞춤형 서비스</p>
      </div>

      <div class="space-y-4">
        <button @click="handleLogin('kakao')"
                class="w-full py-3 px-4 rounded-xl flex items-center justify-center bg-[#FEE500] text-black font-medium transition hover:bg-[#FEE500]/90">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">
            <path fill="#FFE812"
                  d="M256 236c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0h216c11.046 0 20 8.954 20 20v216z"/>
            <path
                d="M128 36C70.562 36 24 72.713 24 118c0 29.279 19.466 54.97 48.748 69.477-1.593 5.494-10.237 35.344-10.581 37.689 0 0-.207 1.762.934 2.434s2.483.15 2.483.15c3.272-.457 37.943-24.811 43.944-29.04 5.995.849 12.168 1.29 18.472 1.29 57.438 0 104-36.712 104-82 0-45.287-46.562-82-104-82z"/>
            <path fill="#FFE812"
                  d="M70.5 146.625c-3.309 0-6-2.57-6-5.73V105.25h-9.362c-3.247 0-5.888-2.636-5.888-5.875s2.642-5.875 5.888-5.875h30.724c3.247 0 5.888 2.636 5.888 5.875s-2.642 5.875-5.888 5.875H76.5v35.645c0 3.16-2.691 5.73-6 5.73zM123.112 146.547c-2.502 0-4.416-1.016-4.993-2.65l-2.971-7.778-18.296-.001-2.973 7.783c-.575 1.631-2.488 2.646-4.99 2.646a9.155 9.155 0 0 1-3.814-.828c-1.654-.763-3.244-2.861-1.422-8.52l14.352-37.776c1.011-2.873 4.082-5.833 7.99-5.922 3.919.088 6.99 3.049 8.003 5.928l14.346 37.759c1.826 5.672.236 7.771-1.418 8.532a9.176 9.176 0 0 1-3.814.827c-.001 0 0 0 0 0zm-11.119-21.056L106 108.466l-5.993 17.025h11.986zM138 145.75c-3.171 0-5.75-2.468-5.75-5.5V99.5c0-3.309 2.748-6 6.125-6s6.125 2.691 6.125 6v35.25h12.75c3.171 0 5.75 2.468 5.75 5.5s-2.579 5.5-5.75 5.5H138zM171.334 146.547c-3.309 0-6-2.691-6-6V99.5c0-3.309 2.691-6 6-6s6 2.691 6 6v12.896l16.74-16.74c.861-.861 2.044-1.335 3.328-1.335 1.498 0 3.002.646 4.129 1.772 1.051 1.05 1.678 2.401 1.764 3.804.087 1.415-.384 2.712-1.324 3.653l-13.673 13.671 14.769 19.566a5.951 5.951 0 0 1 1.152 4.445 5.956 5.956 0 0 1-2.328 3.957 5.94 5.94 0 0 1-3.609 1.211 5.953 5.953 0 0 1-4.793-2.385l-14.071-18.644-2.082 2.082v13.091a6.01 6.01 0 0 1-6.002 6.003z"/>
          </svg>
          카카오 로그인
        </button>

        <button @click="handleLogin('naver')"
                class="w-full py-3 px-4 rounded-xl flex items-center justify-center bg-[#03C75A] text-white font-medium transition hover:bg-[#03C75A]/90">
          <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_403_243)">
              <path d="M18 20H2C0.9 20 0 19.1 0 18V2C0 0.9 0.9 0 2 0H18C19.1 0 20 0.9 20 2V18C20 19.1 19.1 20 18 20Z"
                    fill="#03C75A"/>
              <path d="M11.35 10.25L8.50002 6.19995H6.15002V13.8H8.65002V9.74995L11.5 13.8H13.85V6.19995H11.35V10.25Z"
                    fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0_403_243">
                <rect width="20" height="20" fill="white"/>
              </clipPath>
            </defs>
          </svg>

          네이버 로그인
        </button>

        <button @click="handleLogin('apple')"
                class="w-full py-3 px-4 rounded-xl flex items-center justify-center bg-black text-white font-medium transition hover:bg-black/90">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="black" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M18.1437 15.5861C17.8385 16.2848 17.4772 16.928 17.0586 17.5193C16.4881 18.3255 16.0209 18.8835 15.6609 19.1934C15.1027 19.702 14.5048 19.9625 13.8644 19.9773C13.4047 19.9773 12.8504 19.8477 12.205 19.5847C11.5576 19.323 10.9626 19.1934 10.4186 19.1934C9.84801 19.1934 9.23608 19.323 8.58155 19.5847C7.92602 19.8477 7.39793 19.9847 6.99417 19.9983C6.38012 20.0242 5.76806 19.7563 5.15713 19.1934C4.7672 18.8563 4.27947 18.2786 3.6952 17.4601C3.06832 16.586 2.55294 15.5725 2.14918 14.417C1.71677 13.1689 1.5 11.9603 1.5 10.7902C1.5 9.44984 1.79226 8.29383 2.37766 7.32509C2.83773 6.54696 3.44978 5.93316 4.21581 5.48255C4.98185 5.03195 5.80955 4.80233 6.70091 4.78763C7.18863 4.78763 7.82822 4.93714 8.62303 5.23096C9.4156 5.52576 9.92451 5.67526 10.1476 5.67526C10.3144 5.67526 10.8798 5.50045 11.8382 5.15195C12.7445 4.82874 13.5094 4.69492 14.136 4.74764C15.834 4.88343 17.1097 5.54675 17.9581 6.74177C16.4395 7.6536 15.6883 8.93072 15.7032 10.5691C15.7169 11.8452 16.1841 12.9071 17.1022 13.7503C17.5183 14.1417 17.983 14.4441 18.5 14.6589C18.3879 14.9812 18.2695 15.2898 18.1437 15.5861ZM14.2494 0.400114C14.2494 1.40034 13.8806 2.33425 13.1456 3.19867C12.2586 4.22629 11.1857 4.8201 10.0223 4.7264C10.0075 4.60641 9.99888 4.48011 9.99888 4.3474C9.99888 3.38718 10.4207 2.35956 11.1698 1.51934C11.5438 1.09392 12.0194 0.74019 12.5962 0.458013C13.1718 0.180046 13.7162 0.0263242 14.2282 0C14.2431 0.133715 14.2494 0.267438 14.2494 0.400101V0.400114Z"
                fill="white"/>
          </svg>

          애플 로그인
        </button>
      </div>

      <div class="mt-8 text-center">
        <p class="text-mint-600 text-sm">
          로그인하면 <span class="font-medium">이용약관</span>과 <span class="font-medium">개인정보처리방침</span>에 동의하게 됩니다.
        </p>
      </div>

      <div class="mt-6 flex justify-center">
        <div class="flex space-x-4">
          <button @click="changeLanguage('ko')" class="text-mint-600 text-sm hover:text-mint-800">한국어</button>
          <button @click="changeLanguage('en')" class="text-mint-600 text-sm hover:text-mint-800">English</button>
          <button @click="changeLanguage('zh')" class="text-mint-600 text-sm hover:text-mint-800">中文</button>
          <button @click="changeLanguage('vi')" class="text-mint-600 text-sm hover:text-mint-800">Tiếng Việt</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useRouter} from 'vue-router'
import {useUserStore} from '@/stores/user'
import {ref, onMounted} from 'vue';

const router = useRouter()
const userStore = useUserStore()

// const handleLogin = (provider) => {
//   // 실제 로그인 로직은 추후 구현
//   console.log(`Logging in with ${provider}`)

//   // 임시 사용자 정보로 로그인 처리
//   userStore.login({
//     id: '12345',
//     name: '민지',
//     provider: provider
//   })

//   // 설문 페이지로 이동
//   router.push('/survey')
// }

const handleLogin = async (provider) => {
  try {
    await userStore.login(provider);
    router.push('/survey');
  } catch (error) {
    console.error("Login failed:", error);
    // Handle login failure (e.g., display an error message)
  }
};

const changeLanguage = (lang) => {
  userStore.setLanguage(lang)
  console.log(`Language changed to ${lang}`)
}
</script>