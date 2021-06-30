/*
 * @Dsc: 全局loading
 * @Author: zenghe
 * @Date: 2021-06-29 15:51:19
 */
import { ElLoading } from 'element-plus'

export default function() {
  const loading = (title: string) => {
    const loadingInstance = ElLoading.service({ text: title })
    return loadingInstance
  }

  return {
    loading
  }
}
