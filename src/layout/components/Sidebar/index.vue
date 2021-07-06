<!--
 * @Dsc: 文件描述
 * @Author: zenghe
 * @Date: 2021-06-27 15:08:09
-->
<template>
  <div :class="{'has-logo':showLogo}">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'

import Logo from './Logo.vue'
import SidebarItem from './SidebarPart.vue'
import variables from '@/styles/_variables.module.scss'

export default defineComponent({
  name:'Sidebar',
  components:{
    Logo,
    SidebarItem
  },
  setup() {
    const store = useStore()
    const route = useRoute()

    const sidebar = computed(() => {
      return store.state.app.sidebar
    })

    const routes = computed(() => {
      return store.state.permission.routes
    })

    const showLogo = computed(() => {
      return store.state.settings.sidebarLogo
    })

    const activeMenu = computed(() => {
      const { meta, path } = route
      if (meta !== null || meta !== undefined) {
        if (meta.activeMenu) {
          return meta.activeMenu
        }
      }
      return path
    })

    const isCollapse = computed(() => {
      return sidebar.value.opened
    })
    return {
      sidebar,
      routes,
      showLogo,
      variables,
      activeMenu,
      isCollapse
    }
  },
})
</script>

<style lang="scss">
:v-deep(.sidebar-container){
  .horizontal-collapse-transition {
    transition: 0s width ease-in-out, 0s padding-left ease-in-out,
      0s padding-right ease-in-out;
  }

  .scrollbar-wrapper {
    overflow-x: hidden !important;
  }

  .el-scrollbar__view {
    height: 100%;
  }

  .el-scrollbar__bar {
    &.is-vertical {
      right: 0px;
    }

    &.is-horizontal {
      display: none;
    }
  }
}

</style>


<style lang="scss" scoped>
:v-deep(){
  .el-scrollbar {
    height: 100%;
  }

  .has-logo {
    .el-scrollbar {
      height: calc(100vh - 100px);
    }
  }

  .el-menu {
    border: none;
    height: 100%;
    width: 100% !important;
  }
}

</style>
