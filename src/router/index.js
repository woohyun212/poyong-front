import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/LoginScreen.vue'),
        meta: {
            hideNavigation: true,
            title: '로그인'
        }
    },
    {
        path: '/survey',
        name: 'Survey',
        component: () => import('../views/SurveyScreen.vue'),
        meta: {
            hideNavigation: true,
            title: '진단 설문'
        }
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('../views/HomeScreen.vue'),
        meta: {
            title: '홈'
        }
    },
    {
        path: '/psych-test',
        name: 'PsychologicalTest',
        component: () => import('../views/PsychologicalTestScreen.vue'),
        meta: {
            title: '심리검사'
        }
    },
    {
        path: '/counseling',
        name: 'Counseling',
        component: () => import('../views/CounselingScreen.vue'),
        meta: {
            title: '상담 서비스'
        }
    },
    {
        path: '/videos',
        name: 'Videos',
        component: () => import('../views/VideoListScreen.vue'),
        meta: {
            title: '추천 영상'
        }
    },
    {
        path: '/facilities',
        name: 'Facilities',
        component: () => import('../views/FacilityListScreen.vue'),
        meta: {
            title: '주변 시설'
        }
    },
    {
        path: '/program/:id',
        name: 'ProgramDetail',
        component: () => import('../views/ProgramDetailView.vue'),
        meta: {
            title: '프로그램 상세'
        },
    },
    {
        path: '/chatbot',
        name: 'Chatbot',
        component: () => import('../views/ChatbotScreen.vue'),
        meta: {
            title: 'AI 챗봇 상담'
        }
    },
    {
        path: '/qr',
        name: 'QR',
        component: () => import('../views/QRScreen.vue'),
        meta: {
            title: '학생 QR 인증'
        }
    },
    {
        path: '/qr-verify',
        name: 'QRVerify',
        component: () => import('../views/QRVerifyScreen.vue'),
        meta: {
            title: 'QR 인증번호 입력'
        }
    },
    {
        path: '/teacher-report',
        name: 'TeacherReport',
        component: () => import('../views/TeacherReportScreen.vue'),
        meta: {
            title: '학생 리포트 열람'
        }
    },
    // router/index.js 또는 router.ts
    {
        path: '/smart-learning',
        name: 'SmartLearningContent',
        component: () => import('@/views/SmartLearningContentScreen.vue')
    },
    {
        path: '/kakao/callback',
        name: 'KakaoCallback',
        component: () => import('../views/KakaoCallback.vue'),
        meta: {
            title: '카카오 로그인 중'
        }
    },
    // 404 페이지
    // {
    //     path: '/:pathMatch(.*)*',
    //     redirect: '/home'
    // }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// 페이지 타이틀 변경
router.beforeEach((to, from, next) => {
    document.title = to.meta.title ? `다문화/위기학생 앱 - ${to.meta.title}` : '다문화/위기학생 앱'
    next()
})

export default router