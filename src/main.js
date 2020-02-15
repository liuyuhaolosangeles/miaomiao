import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import axios from 'axios'
Vue.prototype.axios = axios;
Vue.config.productionTip = false



import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Scroller from './components/Scroller'
Vue.use(ElementUI)

// 函数全局定义
// 倒计时
Vue.prototype.countDown = function (){
  this.disabled = true;
  var count = 60
  var timer = setInterval(()=>{
      count--;
      this.verifyInfo = "剩余"+count+"秒"
      if(count===0){
          this.disabled = false
          count = 60
          this.verifyInfo = '发送验证码'
          clearInterval(timer)
      }
  },1000)
  console.log(timer)
}
// 过滤器
Vue.filter('setwh',(url,arg)=>{
  return url.replace(/w\.h/,arg)
})
Vue.component('Scroller',Scroller)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
