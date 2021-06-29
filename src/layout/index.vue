<!--
 * @Dsc: 文件描述
 * @Author: zenghe
 * @Date: 2021-06-04 08:57:38
-->
<template>
   <div :class="classObj" class="app-wrapper">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <sidebar class="sidebar-container" />
    <div :class="{hasTagsView:needTagsView}" class="main-container">
      <div :class="{'fixed-header':fixedHeader}">
        <navbar />
        <tags-view v-if="needTagsView" />
      </div>
      <app-main />
      <right-panel v-if="showSettings">
        <settings />
      </right-panel>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from 'vue'
import RightPanel from '@/components/RightPanel/index.vue'

export default defineComponent({
  name:'Layout',
  components:{
    RightPanel
  },
  setup() {
    return {

    }
  }
})
</script>

<style lang="scss" scoped>
</style>
