<!--
 * @Dsc: 文件描述
 * @Author: zenghe
 * @Date: 2021-06-04 08:57:38
-->
<template>
   <div :class="classObj" class="app-wrapper">
    <div v-if="classObj.mobile==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <sidebar class="sidebar-container" />
    <div :class="{hasTagsView:showTagsView}" class="main-container">
      <div :class="{'fixed-header':fixedHeader}">
        <navbar />
        <tags-view v-if="showTagsView" />
      </div>
      <app-main />
      <right-panel v-if="showSettings">
        <settings />
      </right-panel>
    </div>
  </div>
</template>

<script lang="ts">
import { DeviceType } from '@/store/modules/app/state'
import {defineComponent,toRefs,reactive,watch,computed,onBeforeMount,onBeforeUnmount,onMounted} from 'vue'
import { useStore } from '@/store'
import { AppActionTypes } from '@/store/modules/app/actions'

import { AppMain, Navbar, Settings, TagsView, Sidebar } from './components'
import RightPanel from '@/components/RightPanel/index.vue'

import { useRoute } from 'vue-router'

export default defineComponent({
  name:'Layout',
  components:{
    RightPanel,
    AppMain,
    Navbar,
    Settings,
    TagsView,
    Sidebar
  },
  setup() {
    const store = useStore()
    const WIDTH = 992

    const device = computed(() => {
      return store.state.app.device
    })

    const sidebar = computed(() => {
      return store.state.app.sidebar
    })

    const currentRoute = useRoute()
    const watchRouter = watch(() => currentRoute.name, () => {
      if (store.state.app.device === DeviceType.Mobile && store.state.app.sidebar.opened) {
        store.dispatch('app/'+AppActionTypes.ACTION_CLOSE_SIDEBAR, false)
      }
    })

    const isMobile = () => {
      const rect = document.body.getBoundingClientRect()
      return rect.width - 1 < WIDTH
    }

    const resizeMounted = () => {
      if (isMobile()) {
        store.dispatch('app/'+AppActionTypes.ACTION_TOGGLE_DEVICE, DeviceType.Mobile)
        store.dispatch('app/'+AppActionTypes.ACTION_CLOSE_SIDEBAR, true)
      }
    }

    const resizeHandler = () => {
      if (!document.hidden) {
        store.dispatch('app/'+AppActionTypes.ACTION_TOGGLE_DEVICE, isMobile() ? DeviceType.Mobile : DeviceType.Desktop)
        if (isMobile()) {
          store.dispatch('app/'+AppActionTypes.ACTION_CLOSE_SIDEBAR, true)
        }
      }
    }
    const addEventListenerOnResize = () => {
      window.addEventListener('resize', resizeHandler)
    }

    const removeEventListenerResize = () => {
      window.removeEventListener('resize', resizeHandler)
    }



    const state = reactive({
      handleClickOutside: () => {
        store.dispatch('app/' + AppActionTypes.ACTION_CLOSE_SIDEBAR, false)
      }
    })


    const classObj = computed(() => {
      return {
        hideSidebar: !sidebar.value.opened,
        openSidebar: sidebar.value.opened,
        withoutAnimation: sidebar.value.withoutAnimation,
        mobile: device.value === DeviceType.Mobile
      }
    })

    const showSettings = computed(() => {
      return store.state.settings.showSettings
    })
    const showTagsView = computed(() => {
      return store.state.settings.tagsView
    })
    const fixedHeader = computed(() => {
      return store.state.settings.fixedHeader
    })

    watchRouter()

    onBeforeMount(() => {
      addEventListenerOnResize()
    })
    onMounted(() => {
      resizeMounted()
    })

    onBeforeUnmount(() => {
      removeEventListenerResize()
    })
    return {
      classObj,
      sidebar,
      showSettings,
      showTagsView,
      fixedHeader,
      ...toRefs(state)
    }
  }
})
</script>

<style lang="scss" scoped>
  @import "@/styles/_mixin.scss";
  @import "@/styles/_variables.module.scss";

  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;

    &.mobile.openSidebar {
      position: fixed;
      top: 0;
    }
  }

  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }

  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - #{$sideBarWidth});
    transition: width 0.28s;
  }

  .hideSidebar .fixed-header {
    width: calc(100% - 54px)
  }

  .mobile .fixed-header {
    width: 100%;
  }
</style>
