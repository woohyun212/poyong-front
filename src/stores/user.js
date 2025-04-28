import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    isLoggedIn: false,
    userInfo: null,
    diagnosisResults: null,
    language: 'ko'
  }),
  
  actions: {
    async login(provider) {
      // 실제 로그인 로직은 API 연결 후 구현
      // 여기서는 모의 데이터로 로그인 처리
      console.log(`Logging in with ${provider}`)

      // 임시 사용자 정보로 로그인 처리
      this.isLoggedIn = true
      this.userInfo = {
        id: '12345',
        name: '민지',
        provider: provider
      }

      return Promise.resolve(this.userInfo)
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
    }
  },
  
  getters: {
    userName: (state) => state.userInfo?.name || '사용자',
    isAssessed: (state) => !!state.diagnosisResults
  }
})