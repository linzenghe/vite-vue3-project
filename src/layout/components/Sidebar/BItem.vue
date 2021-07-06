<!--
 * @Dsc: 文件描述
 * @Author: zenghe
 * @Date: 2021-07-05 14:32:23
-->
<template>
  <i :class="{'iconfont':true, icon}"></i>
  <span slot="title" v-if="title">{{title}}</span>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name:'SidebarItem',
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
    return  {

    }
  }
})
</script>

<style scoped lang="scss">
.iconfont {
  color: currentColor;
  width: 1em;
  height: 1em;
}
</style>
