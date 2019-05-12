import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick' // 移动端 300ms 延迟
import 'babel-polyfill' // 移动滚动事件
import VueLazyLoad from 'vue-lazyload' // 图片懒加载

import 'common/stylus/index.styl'

Vue.config.productionTip = false
fastclick.attach(document.body)

Vue.use(VueLazyLoad, {
  loading: require('common/image/default.png') // 默认图片
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
