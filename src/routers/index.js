
import Vue from 'vue'
import VueRouter from 'vue-router'
import movieRouter from './movie/index'
import cinemaRouter from './cinema/index'
import mineRouter from './mine/index'
Vue.use(VueRouter)



export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes:[
      movieRouter,cinemaRouter,mineRouter,
      {
        path:'/*',
        redirect:'/movie'
      }

  ]
})

