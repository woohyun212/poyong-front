<script setup>
import { defineProps } from 'vue'
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js'

// Chart.js 구성 요소 등록
ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, LinearScale, CategoryScale)

const props = defineProps({
  labels: {
    type: Array,
    default: () => ['1개월 전', '2주 전', '현재']
  },
  scores: {
    type: Object,
    required: true
    // 예시:
    // {
    //   학습: [70, 75, 85],
    //   정서: [95, 92, 90],
    //   가정환경: [65, 70, 75]
    // }
  }
})

const chartData = {
  labels: props.labels,
  datasets: [
    {
      label: '학습',
      data: props.scores['학습'],
      borderColor: '#34D399', // mint
      backgroundColor: '#34D399',
      fill: false,
      tension: 0.4
    },
    {
      label: '정서',
      data: props.scores['정서'],
      borderColor: '#60A5FA', // blue
      backgroundColor: '#60A5FA',
      fill: false,
      tension: 0.4
    },
    {
      label: '가정환경',
      data: props.scores['가정환경'],
      borderColor: '#FBBF24', // yellow
      backgroundColor: '#FBBF24',
      fill: false,
      tension: 0.4
    }
  ]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      ticks: {
        callback: function (val, index) {
          const date = new Date(props.labels[index]);
          return `${date.getMonth() + 1}/${date.getDate()}`;
        },
        color: '#6B7280',
      },
      grid: {
        color: '#E5E7EB'
      }
    },
    y: {
      min: 0,
      max: 100,
      ticks: {
        stepSize: 20,
        color: '#6B7280'
      },
      grid: {
        color: '#E5E7EB'
      }
    }
  },
  plugins: {
    legend: {
      position: 'top'
    },
    tooltip: {
      mode: 'index',
      intersect: false
    }
  }
}
</script>

<template>
  <div class="w-full h-64">
    <Line :data="chartData" :options="chartOptions" />
  </div>
</template>