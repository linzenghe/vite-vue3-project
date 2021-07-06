<!--
 * @Dsc: 文件描述
 * @Author: zenghe
 * @Date: 2021-07-01 10:44:13
-->
<template>
  <div>
    <i class="iconfont screenFullBtn" :class="isFullscreen?'icon-zuixiaohua':'icon-quanping1'" @click="click" />
  </div>
</template>

<script lang="ts">
import screenfull from 'screenfull'
import { defineComponent,onMounted,reactive,toRefs ,onBeforeUnmount} from 'vue'
import {ElMessage} from 'element-plus'
export default defineComponent({
  name:'Screenfull',
  setup() {
    const state = reactive({
      isFullscreen:false,
      click:()=>{
        if(!screenfull.isEnabled){
          ElMessage({
            message: 'you browser can not work',
            type: 'warning'
          })
          return false
        }
        screenfull.toggle()
      }
    })
    onMounted(()=>{
      if (screenfull.isEnabled) {
        screenfull.on('change', change)
      }
    })
    onBeforeUnmount(() => {
      if (screenfull.isEnabled) {
        screenfull.off('change', change)
      }
    })
    const change = ()=>{
      if (screenfull.isEnabled) {
        state.isFullscreen = screenfull.isFullscreen
      }
    }

    return {
      ...toRefs(state)
    }
  },
})
</script>

<style lang="scss" scoped>
.screenFullBtn {
  display: inline-block;
  cursor: pointer;
  color: #5a5e66;
  font-size: 20px;
  vertical-align: 10px;
}
</style>
