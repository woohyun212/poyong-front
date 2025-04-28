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
        path: '/map_test',
        name: 'KakaoMap',
        component: () => import('../components/common/KakaoMaps.vue'),
        meta: {
            title: '카카오맵 컴포넌트'
        },
    },
    // 404 페이지
    {
        path: '/:pathMatch(.*)*',
        redirect: '/home'
    }
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