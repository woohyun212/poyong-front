<script setup>
import { ref, onMounted } from 'vue'
import StudentScoreChart from '@/components/common/StudentScoreChart.vue'

const studentName = ref('홍길동')
const scores = ref({
  learning: { current: 85, previous: 80 },
  emotion: { current: 78, previous: 82 },
  family: { current: 92, previous: 89 }
})
const psychologicalSummary = ref('학생은 학습에 대한 동기 부여가 다소 부족하지만, 정서적 안정성은 양호합니다. 가정환경은 전반적으로 지지적입니다.')

const calculateChange = (current, previous) => {
  const diff = current - previous
  if (diff > 0) return `▲ ${diff}`
  if (diff < 0) return `▼ ${Math.abs(diff)}`
  return '-'
}

const downloadFullReport = () => {
  alert('전체 리포트 다운로드 기능 예정!')
}

onMounted(() => {
  // QR 스캔 후 서버에서 학생 리포트 fetch 예정
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-mint-50 to-mint-100 p-6 space-y-6">
    <div class="text-center mt-6">
      <h1 class="text-xl font-bold text-mint-800">학생 리포트 열람</h1>
      <p class="text-mint-600 text-sm mt-2">QR 인증이 완료되었습니다</p>
    </div>

    <div class="bg-white/90 backdrop-blur-lg rounded-2xl shadow-md p-6 space-y-2 text-center">
      <p class="text-mint-600 text-sm">학생 이름</p>
      <p class="text-xl font-bold text-mint-800">{{ studentName }}</p>
    </div>

    <div class="grid grid-cols-3 gap-4">
      <div class="bg-white/80 rounded-2xl p-4 text-center shadow">
        <p class="text-mint-600 text-sm">학습</p>
        <p class="text-xl font-bold text-mint-800">
          {{ scores.learning.current }}
          <span
            class="text-sm ml-1"
            :class="{
              'text-mint-600': scores.learning.current - scores.learning.previous > 0,
              'text-red-500': scores.learning.current - scores.learning.previous < 0,
              'text-gray-400': scores.learning.current - scores.learning.previous === 0
            }"
          >
            {{ calculateChange(scores.learning.current, scores.learning.previous) }}
          </span>
        </p>
      </div>
      <div class="bg-white/80 rounded-2xl p-4 text-center shadow">
        <p class="text-mint-600 text-sm">정서</p>
        <p class="text-xl font-bold text-mint-800">
          {{ scores.emotion.current }}
          <span
            class="text-sm ml-1"
            :class="{
              'text-mint-600': scores.emotion.current - scores.emotion.previous > 0,
              'text-red-500': scores.emotion.current - scores.emotion.previous < 0,
              'text-gray-400': scores.emotion.current - scores.emotion.previous === 0
            }"
          >
            {{ calculateChange(scores.emotion.current, scores.emotion.previous) }}
          </span>
        </p>
      </div>
      <div class="bg-white/80 rounded-2xl p-4 text-center shadow">
        <p class="text-mint-600 text-sm">가정환경</p>
        <p class="text-xl font-bold text-mint-800">
          {{ scores.family.current }}
          <span
            class="text-sm ml-1"
            :class="{
              'text-mint-600': scores.family.current - scores.family.previous > 0,
              'text-red-500': scores.family.current - scores.family.previous < 0,
              'text-gray-400': scores.family.current - scores.family.previous === 0
            }"
          >
            {{ calculateChange(scores.family.current, scores.family.previous) }}
          </span>
        </p>
      </div>
    </div>

    <div class="bg-white/90 backdrop-blur-lg rounded-2xl shadow-md p-6">
      <div class="text-mint-600 text-sm leading-relaxed space-y-4">
        <h3 class="text-mint-800 font-semibold text-lg">🧠 심리검사 종합 리포트</h3>

        <h4 class="text-mint-700 font-semibold">학생 배경</h4>
        <p>해당 학생은 중도입국 아동으로, 초기에 언어 습득에 어려움을 겪었으며, 학교 생활 초기 적응 과정에서 상당한 심리적 긴장과 위축을 경험했습니다. 가정 내에서는 보호자의 지원이 부분적으로 제공되고 있었지만, 언어적 소통의 한계와 문화적 차이로 인해 심리적 안정성을 완전히 확보하기에는 다소 어려움이 존재했습니다.</p>

        <h4 class="text-mint-700 font-semibold">학습 적응 경과</h4>
        <p>입학 초기, 학습 이해도 및 과제 수행 능력이 또래 대비 낮은 수준이었으나, 다문화 청소년 멘토링 프로그램 및 기초학력 보장 프로그램에 지속적으로 참여하면서 학업 성취도가 눈에 띄게 향상되었습니다. 특히 국어 과목에서 문해력 향상이 두드러졌고, 수학 과목에서도 연산 기초 개념 이해도가 상승했습니다.</p>

        <h4 class="text-mint-700 font-semibold">정서적 상태</h4>
        <p>정서적 지표 분석 결과, 학생은 전반적으로 대인관계 형성에 있어 소극적인 경향을 보였습니다. 심리 상담 대화 기록에서는 자신에 대한 부정적 인식과 실패 경험에 대한 과도한 반추 성향이 관찰되었습니다.</p>

        <h4 class="text-mint-700 font-semibold">스트레스 및 대처 전략</h4>
        <p>스트레스 상황 발생 시 회피적 대처가 우세하게 나타났으며, 긍정적 자기 대화 및 감정 조절 훈련 프로그램의 추가 개입이 필요합니다.</p>

        <h4 class="text-mint-700 font-semibold">가정환경 분석</h4>
        <p>보호자는 전반적으로 자녀에 대한 교육적 관심을 갖고 있으나, 문화적 차이로 인한 간헐적 오해가 발생하고 있습니다.</p>

        <h4 class="text-mint-700 font-semibold">심리적 위험 신호</h4>
        <ul class="list-disc list-inside">
          <li>낮은 자기효능감 표현 빈도 증가</li>
          <li>또래 집단 내 소외감 호소</li>
          <li>스트레스 상황에서 울음, 위축 반응 빈도 증가</li>
        </ul>

        <h4 class="text-mint-700 font-semibold">강점 및 보호 요인</h4>
        <ul class="list-disc list-inside">
          <li>학습에 대한 내적 동기 부여 존재</li>
          <li>긍정적 피드백에 대한 높은 반응성</li>
          <li>멘토 및 담당 교사와의 신뢰 관계 형성</li>
        </ul>

        <h4 class="text-mint-700 font-semibold">향후 지원 방향 제언</h4>
        <ul class="list-decimal list-inside">
          <li>기초 문해력 강화 프로그램 지속 제공 및 성취 경험 누적</li>
          <li>주 1회 정서 안정 그룹 상담 연계</li>
          <li>소규모 협력 프로젝트 참여 유도</li>
          <li>다문화 가정 대상 부모 교육 프로그램 연계 및 상담 강화</li>
          <li>분기별 심리검사 및 스트레스 대처 전략 교육 병행</li>
        </ul>

        <h4 class="text-mint-700 font-semibold">📊 심리검사 세부 스코어 변화</h4>
        <ul class="list-disc list-inside">
          <li>정서 안정성: 78점 → 73점 (▼ 5)</li>
          <li>학습 동기: 70점 → 82점 (▲ 12)</li>
          <li>스트레스 대처: 65점 → 68점 (▲ 3)</li>
          <li>또래 관계 만족도: 75점 → 70점 (▼ 5)</li>
          <li>가정 내 지원감 인식: 80점 → 82점 (▲ 2)</li>
        </ul>

        <h4 class="text-mint-700 font-semibold">📌 담당 코멘트 요약</h4>
        <p>학생은 언어 및 문화적 장벽을 극복하고 학업에 대한 적극적 참여를 보이고 있으며, 향후 정서적 안정성을 강화하는 다각적 지원이 필요합니다.</p>
      </div>

      <!-- 그래프 영역 -->
      <div class="mt-6">
        <p class="text-mint-800 text-sm font-semibold mb-2">📈 심리검사 점수 변화</p>
        <div class="bg-white/90 rounded-lg p-4">
          <StudentScoreChart
            :labels="['2024-02-01', '2024-03-01', '2024-04-01']"
            :scores="{
              '학습': [70, 75, 85],
              '정서': [95, 90, 78],
              '가정환경': [88, 90, 92]
            }"
          />
        </div>
      </div>
    </div>

    <div class="text-center">
      <button @click="downloadFullReport" class="bg-mint-600 hover:bg-mint-700 text-white font-medium py-3 px-8 rounded-full shadow transition">
        전체 리포트 다운로드
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>