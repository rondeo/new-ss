import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)

// import { Button } from 'element-ui'
// Vue.use(Button)
import './element-ui'
// router.beforeEach((to,from,next) => { 
//     console.log('beforeEach')
  
//     next();
 
// })
// router.beforeResolve((to, from,next)=>{ 
//   console.log('beforeResolve')
//   next();
// })
// router.afterEach((to, from) => { 
//   console.log('afterEach'   );
// })


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
