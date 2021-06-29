<!--
 * @Dsc: 文件描述
 * @Author: zenghe
 * @Date: 2021-06-07 14:17:51
-->
<script lang="ts">
import {defineComponent} from 'vue'
import { useRoute,useRouter} from 'vue-router'
export default defineComponent({
  created(){
    const {params, query} = useRoute()
    const {path} = params
    useRouter().replace({path:'/'+path,query}).catch(err=>{
      console.log(err)
    })
  }
})
</script>
