import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Mypage from '@/components/Mypage'
import Updateprofile from '@/components/Updateprofile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/mypage',
      name: 'Mypage',
      component: Mypage
    },
    {
      path: '/editprofile',
      name: 'Updateprofile',
      component: Updateprofile
    }
  ]
})
