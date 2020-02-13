
import Vue from 'vue'
import VueRouter from 'vue-router'
import movieRouter from './movie/index'
import cinemaRouter from './cinema/index'
import mineRouter from './mine/index'
import adminRouter from './admin/index'
Vue.use(VueRouter)



export default new VueRouter({
    mode: 'history',
    base: 'miaomiao',
    routes:[
      movieRouter,cinemaRouter,mineRouter,adminRouter,
      {
        path:'/*',
        redirect:'/movie'
      }

  ]
})

