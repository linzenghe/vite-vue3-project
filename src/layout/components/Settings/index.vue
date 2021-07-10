<!--
 * @Dsc: 文件描述
 * @Author: zenghe
 * @Date: 2021-06-27 15:09:39
-->
<template>
  <div class="drawer-container">
    <div>
      <h3 class="drawer-title">
        系统布局配置
      </h3>

      <div class="drawer-item">
        <span>主题色</span>
        <ThemePicker
          style="float: right;height: 26px;margin: -3px 8px 0 0;"
          @change="themeChange"
        />
      </div>

      <div class="drawer-item">
        <span>显示 Tags-View</span>
        <el-switch
          v-model="showTagsView"
          class="drawer-switch"
        />
      </div>

      <div class="drawer-item">
        <span>显示侧边栏 Logo</span>
        <el-switch
          v-model="showSidebarLogo"
          class="drawer-switch"
        />
      </div>

      <div class="drawer-item">
        <span>固定 Header</span>
        <el-switch
          v-model="fixedHeader"
          class="drawer-switch"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { defineComponent,getCurrentInstance, reactive, toRefs, watch } from 'vue'
import { SettingsActionTypes } from '@/store/modules/setting/actions'
import ThemePicker from '@/components/ThemePicker/index.vue'

export default defineComponent({
  name:'Settings',
  components:{
    ThemePicker
  },
  setup() {
    const store = useStore()
    const state = reactive({
      fixedHeader: store.state.settings.fixedHeader,
      showTagsView: store.state.settings.tagsView,
      showSidebarLogo: store.state.settings.sidebarLogo,
      themeChange: (value:string)=>{
        store.dispatch('settings/' + SettingsActionTypes.ACTION_CHANGE_SETTING, {key:'theme',value})
      }
    })

    watch(() => state.fixedHeader, (value) => {
      store.dispatch('settings/' + SettingsActionTypes.ACTION_CHANGE_SETTING, { key: 'fixedHeader', value })
    })

    watch(() => state.showTagsView, (value) => {
      store.dispatch('settings/'+ SettingsActionTypes.ACTION_CHANGE_SETTING, { key: 'tagsView', value })
    })

    watch(() => state.showSidebarLogo, (value) => {
      store.dispatch('settings/'+ SettingsActionTypes.ACTION_CHANGE_SETTING, { key: 'sidebarLogo', value })
    })

    return {
      ...toRefs(state)
    }
  },
})
</script>

<style lang="scss" scoped>
.drawer-container {
  padding: 24px;
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;

  .drawer-title {
    margin-bottom: 12px;
    color: rgba(0, 0, 0, .85);
    font-size: 14px;
    line-height: 22px;
  }

  .drawer-item {
    color: rgba(0, 0, 0, .65);
    font-size: 14px;
    padding: 12px 0;
  }

  .drawer-switch {
    float: right
  }
}
</style>
