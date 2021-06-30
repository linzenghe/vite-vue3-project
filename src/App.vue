<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from '@/store'
export default defineComponent({
  setup(){
    const store = useStore()
  }
});
</script>

<style lang="scss">

</style>
