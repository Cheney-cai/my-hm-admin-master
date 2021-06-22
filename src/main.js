import Vue from 'vue'
import App from './App.vue'
import './assets/css/base.css'
import router from './router'
// 需要引入element-ui js 和样式文件
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css'
// import store from './store'
//导入字体图标样式
import './assets/fonts/iconfont.css'
Vue.config.productionTip = false

new Vue({
  router,
  // store,
  render: (h) => h(App),
}).$mount('#app')
