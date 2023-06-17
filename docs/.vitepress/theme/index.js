/*
 * @LastEditTime: 2023-06-18 02:02:37
 * @Description: 扩展默认主题
 * @Date: 2023-05-10 14:28:25
 * @Author: isboyjc
 * @LastEditors: isboyjc
 */
import DefaultTheme from 'vitepress/theme'
import MyLayout from './components/MyLayout.vue'
import NotFound from './components/NotFound.vue';

export default {
  ...DefaultTheme,
  NotFound,
  // 使用包装组件重写布局
  // 注入插槽
  Layout: MyLayout,
  enhanceApp(ctx) {
    // 注册自定义全局组件
    // ctx.app.component('Home', Home)
  },
  
}