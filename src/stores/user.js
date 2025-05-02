import {defineStore} from "pinia";

export const useUserStore = defineStore('user', {
  state: () => ({
    isLoggedIn: false,
    userInfo: null,
    diagnosisResults: null,
    language: 'ko',
    accessToken: null
  }),

  actions: {
    async login(provider) {
      console.log(`Logging in with ${provider}`)
      this.isLoggedIn = true
      this.userInfo = {
        id: '12345',
        name: '민지',
        provider
      }
      return this.userInfo
    },

    // ✅ 백엔드에서 전달받은 사용자 정보 설정
    async setUser(userData) {
      this.isLoggedIn = true
      this.userInfo = userData
    },

    logout() {
      this.isLoggedIn = false
      this.userInfo = null
      this.diagnosisResults = null
    },

    setDiagnosisResults(results) {
      this.diagnosisResults = results
    },

    setLanguage(lang) {
      this.language = lang
    },

    setToken(token) {
      this.accessToken = token;
    }
  },
  
  getters: {
    userName: (state) => state.userInfo?.name || '사용자',
    isAssessed: (state) => !!state.diagnosisResults
  }
})