/*
 * @LastEditTime: 2023-06-26 04:35:43
 * @Description: unocss 配置
 * @Date: 2023-06-26 04:22:50
 * @Author: isboyjc
 * @LastEditors: isboyjc
 */
import { presetAttributify, presetUno, defineConfig } from "unocss";
// Unocss 指令插件
import transformerDirectives from '@unocss/transformer-directives'
// 变体组 指令插件
// 使用： <div class="hover:(bg-gray-400 font-medium) font-(light mono)"/> 
// 转化： <div class="hover:bg-gray-400 hover:font-medium font-light font-mono"/>
import transformerVariantGroup from '@unocss/transformer-variant-group'

export default defineConfig({
  // 快捷方式
  shortcuts: {
    // 'border-main': 'border-gray-400 border-opacity-30',
    // 'bg-main': 'bg-gray-400',
    // 'bg-base': 'bg-white dark:bg-hex-1a1a1a',
  },
  presets: [
    presetUno(), 
    presetAttributify({
      prefix: 'uno-',
      prefixedOnly: true, // <--
    })
  ],
  // 主题
  theme: {
    colors: {
      primary: '#3eaf7c',
    },
    fontFamily: {
      mono: 'var(--vt-font-family-mono)',
    },
  },
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})