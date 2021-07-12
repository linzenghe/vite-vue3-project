<template>
  <div class="dashboard-editor-container">
    <panel-group @handle-set-line-chart-data="handleSetLineChartData" ></panel-group>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PanelGroup from './components/PanelGroup.vue'
export default defineComponent({
  name: 'Name',
  components: {
    PanelGroup,
  },
  setup () {
    const handleSetLineChartData = (type:any) => {
      console.log(type)
    }
    return {
      handleSetLineChartData,
    }
  },
})
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 20px;
  background-color: #F2F7FF;
  position: relative;

  .github-corner{
    position: absolute;
    top: 0;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
    border-radius: 8px;
  }
}
</style>
