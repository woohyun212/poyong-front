import {defineStore} from "pinia";
import api from "@/utils/axios"

export const useUserStore = defineStore('user', {
  state: () => ({
    isLoggedIn: false,
    userInfo: null,
    diagnosisResults: null,
    language: 'ko',
    accessToken: null
  }),

  actions: {
    setLanguage(lang) {
      this.language = lang
    },

    // ✅ 백엔드에서 전달받은 사용자 정보 설정
    async setToken(token) {
      this.accessToken = token
      localStorage.setItem('access_token', token)  // 저장
      try {
        const res = await api.get('/users/me')     // 토큰 자동 첨부됨
        await this.setUser(res.data)
      } catch (err) {
        console.error('Error fetching user info:', err)
      }
    },

    async setUser(userData) {
      this.isLoggedIn = true
      this.userInfo = userData
    },

    logout() {
      this.isLoggedIn = false
      this.userInfo = null
    },
  },
  
  getters: {
    userName: (state) => state.userInfo?.name || '사용자',
    isAssessed: (state) => !!state.diagnosisResults
  }
})