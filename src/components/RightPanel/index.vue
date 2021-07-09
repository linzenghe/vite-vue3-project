<!--
 * @Dsc: 文件描述
 * @Author: zenghe
 * @Date: 2021-06-27 15:24:50
-->
<template>
  <div ref="rightPanel" :class="{show:show}" class="rightPanel-container">
    <div class="rightPanel-background" @click="show=!show"/>
    <div class="rightPanel">
      <div class="handle-button" :style="{top:buttonTop+'px',backgroundColor:theme}" @click="show=!show">
        <i :class="show?'el-icon-close':'el-icon-setting'" />
      </div>
      <div class="rightPanel-items">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {computed,defineComponent,ref,watch,reactive,toRefs} from 'vue'
import { addClass, removeClass } from '@/utils'
import {useStore} from '@/store'
export default defineComponent({
  name:'RightPanel',
  props:{
    clickNotClose: {
      default: false,
      type: Boolean
    },
    buttonTop: {
      default: 250,
      type: Number
    }
  },
  setup(props) {
    let show = ref<Boolean>(false)
    const rightPanel = ref(null)
    const store = useStore()
    const theme = computed(() => {
      return store.state.settings.theme
    })

    watch(show,(value)=>{
      if(value && props.clickNotClose){
        methods.addEventClick()
      }
      if(value){
        addClass(document.body,'showRightPanel')
      }else{
        removeClass(document.body, 'showRightPanel')
      }
    })

    const methods = reactive({
      addEventClick:()=> {
        window.addEventListener('click', methods.closeSidebar)
      },
      closeSidebar:(e:Event)=> {
        const target = e.target as HTMLInputElement
        const parent = target.closest('.rightPanel')
        if (!parent) {
          show.value = false
          window.removeEventListener('click', methods.closeSidebar)
        }
      },
      insertToBody() {
        const elx = rightPanel.value as any
        const body:HTMLElement = document.querySelector('body') as HTMLElement
        body.insertBefore(elx, body.firstChild)
      }
    })

    return {
      show,
      theme,
      rightPanel,
      ...toRefs(methods),
    }
  },
})
</script>

<style>
.showRightPanel {
  overflow: hidden;
  position: relative;
  width: calc(100% - 15px);
}
</style>

<style lang="scss" scoped>
.rightPanel-background {
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity .3s cubic-bezier(.7, .3, .1, 1);
  background: rgba(0, 0, 0, .2);
  z-index: -1;
}

.rightPanel {
  width: 100%;
  max-width: 260px;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, .05);
  transition: all .25s cubic-bezier(.7, .3, .1, 1);
  transform: translate(100%);
  background: #fff;
  z-index: 40000;
}

.show {
  transition: all .3s cubic-bezier(.7, .3, .1, 1);

  .rightPanel-background {
    z-index: 20000;
    opacity: 1;
    width: 100%;
    height: 100%;
  }

  .rightPanel {
    transform: translate(0);
  }
}

.handle-button {
  width: 48px;
  height: 48px;
  position: absolute;
  left: -48px;
  text-align: center;
  font-size: 24px;
  border-radius: 6px 0 0 6px !important;
  z-index: 0;
  pointer-events: auto;
  cursor: pointer;
  color: #fff;
  line-height: 48px;
  i {
    font-size: 24px;
    line-height: 48px;
  }
}
</style>
