import Vue from 'vue'
import Router from 'vue-router'

const content = () => import('./Synthesis.js')
const projectList = () => import('@/components/project_list.vue')
const invList=()=>import('@/components/invList.vue')
const notice=()=>import("@/components/notice.vue")
const expendList=()=>import("@/components/expendList.vue")
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'content',
      component: content
    },{
      path: '/project/project_list',

      name: 'content',
      component: projectList
     
    }, {
      path: '/invList/invList',
      name: 'content',
      component: invList
    },{
      name:'content',
      path: '/Tender/Notice',
      component: notice


    },{
      name:'content',
      path:'/Expenditure management/list',
      component:expendList
    }
  ]
})
