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
    link: "/facilities",
    linkText: "시설 보기"
  }
]

const 심리상담 = [
  {
    title: "전문가 심리상담",
    description: "우울감, 불안감을 전문적으로 상담",
    icon: Heart,
    bgColor: "bg-pink-100",
    iconColor: "text-pink-600",
    badgeText: "상담",
    badgeBgColor: "bg-pink-500",
    badgeTextColor: "text-white",
    link: "/counseling",
    linkText: "상담 신청"
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
  }
]

export const recommendationData = {
  "모든 서비스": [...지역프로그램, ...심리상담, ...디지털기기지원],
  "지역 프로그램": 지역프로그램,
  "심리상담": 심리상담,
  "디지털 기기 지원": 디지털기기지원
}