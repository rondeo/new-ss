import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import List from './components/List'
import Add from './components/Add'
import Collection from './components/Collection'
Vue.use(Router)
export default new Router({
  routes: [
    { path: '', component: Home,name:'0home' },
    {
      path: '/home', component: Home, name: 'home'},
    {
      path: '/list', component: List, name: "list",
      beforeEnter(to,from ,next) {
        console.log("beforeEneter");
        next();
      }
    },
    { path: '/Add', component: Add,name:'add'},
    { path: '/collection', component: Collection, name: 'collection', meta: {name:'collection,keepAlive:true'} },
    { path: '*', redirect: '/list', name: '*' },
    {},
    
  ]
})






//  ]
 // routes: [
 //   {
 //     path: '/',
 //     name: 'home',
 //     component: Home
 //   },
 //   {
 //     path: '/about',
 //     name: 'about',
 //     component: () => import('./views/About.vue')
 //   }
 // ]