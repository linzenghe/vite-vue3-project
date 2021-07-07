<!--
 * @Dsc: 文件描述
 * @Author: zenghe
 * @Date: 2021-07-05 14:33:19
-->
<template>
  <div v-if="!item.meta || !item.meta.hidden">
    <template v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow">
      <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{'submenu-title-noDropdown':!isNest}">
          <i class="iconfont sub-el-icon" :class="onlyOneChild.meta.icon||(item.meta&&item.meta.icon)"></i>
          <template #title v-if="onlyOneChild.meta.title">{{onlyOneChild.meta.title}}</template>
        </el-menu-item>
      </app-link>
    </template>

    <el-submenu v-else ref="subMenu" :index="resolvePath(item.path)" popper-append-to-body>
      <template v-if="item.meta">
        <i class="iconfont sub-el-icon" :class="item.meta && item.meta.icon"></i>
        <template slot="title" v-if="item.meta.title">{{item.meta.title}}</template>
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      ></sidebar-item>
    </el-submenu>
  </div>
</template>

<script lang="ts">
import path from 'path'
import { isExternal } from '@/utils/validate'
import { defineComponent,ref } from 'vue'

import AppLink from './Link.vue'

export default defineComponent({
  name:'SidebarItem',
  components:{
    AppLink
  },
  props:{
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const onlyOneChild = ref()

    const hasOneShowingChild = (children:[], parent:object)=>{
      const showingChildren = children.filter((item: any) => {
        if (item.meta.hidden) {
          return false
        } else {
          // Temp set(will be used if only has one showing child)
          onlyOneChild.value = item
          return true
        }
      })
      if (showingChildren.length === 1) {
        return true
      }
      if (showingChildren.length === 0) {
        onlyOneChild.value = { ... parent, path: '', noShowingChildren: true }
        return true
      }
      return true
    }

    const resolvePath = (routePath:string)=>{
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(props.basePath)) {
        return props.basePath
      }
      return path.resolve(props.basePath, routePath)
    }

    return {
      onlyOneChild,
      hasOneShowingChild,
      resolvePath
    }
  },
})
</script>

<style lang="scss" scoped>
.sub-el-icon {
  color: currentColor;
  width: 1em;
  height: 1em;
}
</style>
