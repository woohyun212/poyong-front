// src/data/recommendationData.js

import { Globe, Heart, Monitor } from "lucide-vue-next"

const 지역프로그램 = [
  {
    title: "지역 아동센터 프로그램",
    description: "방과 후 다양한 체험 활동 제공",
    icon: Globe,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    badgeText: "무료",
    badgeBgColor: "bg-blue-500",
    badgeTextColor: "text-white",
    link: "/program/1",
    linkText: "시설 보기"
  },
  {
    title: "청소년 문화교실",
    description: "댄스, 음악, 미술 수업 운영",
    icon: Globe,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    badgeText: "무료",
    badgeBgColor: "bg-blue-500",
    badgeTextColor: "text-white",
    link: "/program/2",
    linkText: "시설 보기"
  },
  {
    title: "지역 스포츠 교실",
    description: "축구, 농구, 태권도 무료 강습",
    icon: Globe,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    badgeText: "무료",
    badgeBgColor: "bg-blue-500",
    badgeTextColor: "text-white",
    link: "/program/3",
    linkText: "시설 보기"
  }
]

const 심리상담 = [
  {
    title: "심리 검사",
    description: "자가진단 심리검사로 현재 상태를 확인하세요",
    icon: Heart,
    bgColor: "bg-pink-100",
    iconColor: "text-pink-600",
    badgeText: "검사",
    badgeBgColor: "bg-pink-500",
    badgeTextColor: "text-white",
    link: "/psych-test",
    linkText: "검사 시작"
  },
  {
    title: "온라인 상담",
    description: "언제 어디서나 가능한 온라인 심리상담 서비스",
    icon: Heart,
    bgColor: "bg-pink-100",
    iconColor: "text-pink-600",
    badgeText: "상담",
    badgeBgColor: "bg-pink-500",
    badgeTextColor: "text-white",
    link: "/counseling",
    linkText: "상담 신청"
  },
  {
    title: "영상 상담",
    description: "화상 연결을 통한 실시간 심리상담",
    icon: Heart,
    bgColor: "bg-pink-100",
    iconColor: "text-pink-600",
    badgeText: "상담",
    badgeBgColor: "bg-pink-500",
    badgeTextColor: "text-white",
    link: "/counseling",
    linkText: "상담 신청"
  },
  {
    title: "오프라인 기관 안내",
    description: "근처 심리상담 기관을 안내해드립니다",
    icon: Heart,
    bgColor: "bg-pink-100",
    iconColor: "text-pink-600",
    badgeText: "기관",
    badgeBgColor: "bg-pink-500",
    badgeTextColor: "text-white",
    link: "/facilities",
    linkText: "기관 찾기"
  }
]

const 디지털기기지원 = [
  {
    title: "디지털 기기 지원",
    description: "가정에 필요한 태블릿/노트북 대여",
    icon: Monitor,
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
    badgeText: "지원",
    badgeBgColor: "bg-green-500",
    badgeTextColor: "text-white",
    link: "/facilities",
    linkText: "지원 정보"
  },
  {
    title: "스마트 러닝 지원",
    description: "스마트러닝 기기 및 콘텐츠 제공",
    icon: Monitor,
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
    badgeText: "지원",
    badgeBgColor: "bg-green-500",
    badgeTextColor: "text-white",
    link: "/facilities",
    linkText: "지원 정보"
  },
  {
    title: "디지털 교육 프로그램",
    description: "컴퓨터 기초 교육 및 장비 지원",
    icon: Monitor,
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
    badgeText: "지원",
    badgeBgColor: "bg-green-500",
    badgeTextColor: "text-white",
    link: "/facilities",
    linkText: "지원 정보"
  }
]

export const recommendationData = {
  "모든 서비스": [...지역프로그램, ...심리상담, ...디지털기기지원],
  "지역 프로그램": 지역프로그램,
  "심리상담": 심리상담,
  "디지털 기기 지원": 디지털기기지원
}