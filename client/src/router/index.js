import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import AllList from '@/components/AllList'
import AddList from '@/components/AddList'
import MondaiList from '@/components/MondaiList'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'AllList',
      component: AllList
    },
    {
      path: '/add',
      name: 'AddList',
      component: AddList
    },
    {
      path: '/myList/show/:id',
      name: 'MondaiList',
      component: MondaiList
    }
  ]
})