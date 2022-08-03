import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home'),
    children: [
      {
        // 生成
        path: '',
        component: () => import('../components/main/main-robots.vue'),
      },
      {
        // 生成
        path: '/robots',
        component: () => import('../components/main/main-robots.vue'),
      },
      {
        // 生成
        path: '/material',
        component: () => import('../components/main/main-material.vue'),
        children: [
          {
            // 生成
            path: '',
            component: () => import('../components/main/main-material-hello.vue'),
          },
          {
            // 生成
            path: 'hello',
            component: () => import('../components/main/main-material-hello.vue'),
          },
          {
            // 生成
            path: 'faq',
            component: () => import('../components/main/main-material-faq.vue'),
          },
          {
            // 生成
            path: 'timeout',
            component: () => import('../components/main/main-material-timeout.vue'),
          },
        ]
      },
    ],

  },

]

const router = new VueRouter({
  mode: 'history',
  routes,

})
// router.beforeEach((to, from, next) => {
//   // 如果用户未能验证身份，则 `next` 会被调用两次
//   if (to.path == '/robots') {
//     next()
//     return
//   }
//   if (to.path == '/') {
//     next()
//     return
//   }
//   if (window.myVue.store.wallet == '') {
//     window.myVue.$tips.err('请先链接钱包')
//     next({ path: from.path })
//     return
//   }
//   next()


//   //  && 
// })


export default router
