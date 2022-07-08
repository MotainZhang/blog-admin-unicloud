<template>
  <div :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import * as echarts from 'echarts'
import macarons from 'echarts/theme/macarons'
import resize from './mixins/resize'

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart',
    },
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '300px',
    },
  },
  data() {
    return {
      chart: null,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, macarons)

      this.chart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          left: 'center',
          bottom: '10',
          data: ['javascript', 'vue', 'css', 'koa', 'node'],
        },
        series: [
          {
            name: 'WEEKLY WRITE ARTICLES',
            type: 'pie',
            roseType: 'radius',
            radius: [15, 95],
            center: ['50%', '38%'],
            data: [
              { value: 320, name: 'javascript' },
              { value: 240, name: 'vue' },
              { value: 149, name: 'css' },
              { value: 100, name: 'koa' },
              { value: 59, name: 'node' },
            ],
            animationEasing: 'cubicInOut',
            animationDuration: 2600,
          },
        ],
      })
    },
  },
}
</script>
