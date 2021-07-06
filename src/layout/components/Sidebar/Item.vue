<!--
 * @Dsc: 文件描述
 * @Author: zenghe
 * @Date: 2021-07-05 14:32:23
-->
<template>
  <div>1212</div>
</template>
<script lang="ts">
import { defineComponent, computed, toRef, h } from 'vue'
export default defineComponent({
  name:'MenuItem',
  funcitonal:true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  setup(props){
    const { icon, title } = props
    //  if (icon) {
    //   if (icon.includes('el-icon')) {
    //     vnodes.push(<i class={[icon, 'sub-el-icon']}></i>)
    //   } else {
    //     // vnodes.push(<svg-icon  class={icon}></)
    //   }
    // }
    return  {

    }
  }
})
</script>

<style scoped>
.sub-el-icon {
  color: currentColor;
  width: 1em;
  height: 1em;
}
</style>
