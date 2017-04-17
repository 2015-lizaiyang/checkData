import Vue from 'vue'
import Router from 'vue-router'
import accountList from '@/components/accountList'
import storeList from '@/components/storeList'
import accountsShow from '@/components/accountsShow'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'accountList',
      component: accountList,
      meta: {requiresAuth: true}
    },
    {
      path: '/storeList/:id',
      name: 'storeList',
      component: storeList,
      meta: {requiresAuth: true}
    },
    {
      path: '/accountsShow/:id',
      name: 'accountsShow',
      component: accountsShow,
      meta: {requiresAuth: false}
    }
  ]
})
