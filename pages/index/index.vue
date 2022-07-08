<template>
  <div class="dashboard-editor-container">
    <panel-group
      :groupList="groupList"
      @handleCardClick="handleCardClick"
      @mouseOver="mouseOver"
      @mouseLeave="mouseLeave"
    />

    <el-row style="background: #fff; padding: 16px 16px 0; margin-bottom: 32px">
      <line-chart v-if="showChart" :chart-data="lineChartData" />
    </el-row>

    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <raddar-chart v-if="showChart" />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <pie-chart v-if="showChart" />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <bar-chart v-if="showChart" :chart-data="lineChartData" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PanelGroup from './components/PanelGroup'
import LineChart from './components/LineChart'
import RaddarChart from './components/RaddarChart'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'

export default {
  name: 'DashboardAdmin',
  components: {
    PanelGroup,
    LineChart,
    RaddarChart,
    PieChart,
    BarChart,
  },
  data() {
    return {
		showChart:false,
      lineChartData: {
        monthList: [],
        countList: [],
      },
      groupList: [
        {
          icon: 'icon-wenzhang',
          title: '文章',
          count: 34,
          color: '#40c9c6',
          active: false,
          unit: '篇',
        },
        {
          icon: 'icon-icon',
          title: '分类',
          count: 25,
          color: '#36a3f7',
          active: false,
          unit: '个',
        },
        {
          icon: 'icon-biaoqian',
          title: '标签',
          count: 21,
          color: '#f4516c',
          active: false,
          unit: '个',
        },
        {
          icon: 'icon-pengyouquan',
          title: '圈子',
          count: 14,
          color: '#34bfa3',
          active: false,
          unit: '篇',
        },
      ],
    }
  },
  mounted() {
    this.getArticleCountByMonth()
    this.getAllCount()
  },
  methods: {
    // 获取所有分类统计
    getAllCount() {
      vk.callFunction({
        url: 'admin/dashboard/sys/getAllCount',
        data: {},
        success: (data) => {
          this.groupList[0].count = data.articleCount
          this.groupList[1].count = data.categoryCount
          this.groupList[2].count = data.tagCount
          this.groupList[3].count = data.friendCount
        },
        complete() {},
      })
    },
    // 获取文章月统计
    getArticleCountByMonth() {
      vk.callFunction({
        url: 'admin/article/sys/getCountByMonth',
        data: {
          monthTimeArr: this.getAllMonths(10),
        },
        success: (data) => {
          this.lineChartData.monthList = data.monthList
          this.lineChartData.countList = data.countList
		  this.showChart =true
        },
        complete() {},
      })
    },
    // 获取当前时间前一年的所有月份
    getAllMonths(month) {
      var dataArr = []
      var data = new Date()
      var year = data.getFullYear()
      data.setMonth(data.getMonth() + 1, 1) //获取到当前月份,设置月份
      for (var i = 0; i < month; i++) {
        data.setMonth(data.getMonth() - 1) //每次循环一次 月份值减1
        var m = data.getMonth() + 1
        m = m < 10 ? '0' + m : m
        dataArr.push(data.getFullYear() + '-' + m)
      }
      return dataArr.reverse()
    },
    mouseOver(index) {
      this.groupList[index].active = true
    },
    mouseLeave(index) {
      this.groupList[index].active = false
    },
    handleCardClick() {},
  },
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width: 1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
