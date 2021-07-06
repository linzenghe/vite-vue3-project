<!--
 * @Dsc: 文件描述
 * @Author: zenghe
 * @Date: 2021-07-05 14:32:44
-->
<template>
  <component :is="type" v-bind="linkProps(to)">
    <slot />
  </component>
</template>

<script lang="ts">
import { isExternal as external } from '@/utils/validate'
import { defineComponent,computed } from 'vue'
export default defineComponent({
  name:'Name',
  props:{
    to: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const isExternal = computed(()=>{
      return external(props.to)
    })

    const type = computed(()=>{
      if(isExternal){
        return 'a'
      }
      return 'router-link'
    })

    const linkProps = (to:string)=>{
      if(isExternal){
        return {
          href: to,
          target: '_blank',
          rel: 'noopener'
        }
      }
      return {
        to: to
      }
    }

    return {
      linkProps,
      type
    }
  },
})
</script>

<style lang="scss" scoped>
</style>
