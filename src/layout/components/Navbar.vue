<!--
 * @Dsc: 文件描述
 * @Author: zenghe
 * @Date: 2021-06-27 15:09:39
-->
<template>
  <div class="drawer-container">
    <div>
      <h3 class="drawer-title">
        {{ t('settings.title') }}
      </h3>

      <div class="drawer-item">
        <span>{{ t('settings.theme') }}</span>
        <ThemePicker
          style="float: right;height: 26px;margin: -3px 8px 0 0;"
          @change="themeChange"
        />
      </div>

      <div class="drawer-item">
        <span>{{ t('settings.showTagsView') }}</span>
        <el-switch
          v-model="showTagsView"
          class="drawer-switch"
        />
      </div>

      <div class="drawer-item">
        <span>{{ t('settings.showSidebarLogo') }}</span>
        <el-switch
          v-model="showSidebarLogo"
          class="drawer-switch"
        />
      </div>

      <div class="drawer-item">
        <span>{{ t('settings.fixedHeader') }}</span>
        <el-switch
          v-model="fixedHeader"
          class="drawer-switch"
        />
      </div>

      <div class="drawer-item">
        <span>{{ t('settings.sidebarTextTheme') }}</span>
        <el-switch
          v-model="sidebarTextTheme"
          class="drawer-switch"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { defineComponent } from 'vue'
export default defineComponent({
  name:'Navbar',
  setup() {
    return {

    }
  },
})
</script>

<style lang="scss" scoped>
</style>
