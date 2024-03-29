/*
 * @Dsc: 文件描述
 * @Author: zenghe
 * @Date: 2021-06-08 09:09:52
 */

/**
 * @param {string} str
 * @returns {Boolean}
 */
 export const isValidUsername = (str: String):Boolean => ['admin', 'editor'].indexOf(str.trim()) >= 0

 /**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path: string) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
