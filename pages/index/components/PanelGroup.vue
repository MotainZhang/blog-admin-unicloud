<template>
  <el-row :gutter="40" class="panel-group">
    <el-col
      :xs="12"
      :sm="12"
      :lg="6"
      class="card-panel-col"
      v-for="(item, index) in groupList"
      :key="index"
    >
      <div class="card-panel" @click="handleCardClick()">
        <div
          class="card-panel-icon-wrapper"
          :style="{ background: item.active ? item.color : '#fff' }"
          @mouseover="mouseOver(index)"
          @mouseleave="mouseLeave(index)"
        >
          <span
            class="iconfont"
            :class="item.icon"
            :style="{ color: item.active ? '#fff' : item.color }"
          ></span>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">{{ item.title }}</div>
          <count-to
            :start-val="0"
            :end-val="item.count"
            :duration="2600"
            :suffix="item.unit"
            class="card-panel-num"
          />
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import CountTo from 'vue-count-to'

export default {
  components: {
    CountTo,
  },
  props: {
    groupList: {
      type: Array,
      default: [],
    },
  },
  methods: {
    mouseOver(index) {
      this.$emit('mouseOver', index)
    },
    mouseLeave(index) {
      this.$emit('mouseLeave', index)
    },
    handleCardClick(type) {
      this.$emit('handleCardClick', type)
    },
  },
}
</script>

<style lang="less" scoped>
.panel-group {
  margin-top: 18px;

  /deep/.card-panel-col {
    margin-bottom: 32px;
    padding: 0;
  }

  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.05);
    // margin: 15px;
    .iconfont {
      font-size: 48px;
    }
    .card-panel-icon-wrapper {
      float: left;
      margin: 10px 0 0 30px;
      padding: 8px 20px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-icon {
      float: left;
      font-size: 58px;
    }

    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px 36px 16px 16px;
      margin-left: 0px;

      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }

      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}

@media (max-width: 550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;
  }
}
</style>
