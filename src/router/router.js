import Content from '@/views/Content.vue'
import { dynamicRouter } from './dynamicRouter'

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: 'Login - 登录'
  },
  component: resolve => { require(['@/views/Login.vue'], resolve) }
}

export const locking = {
  path: '/locking',
  name: 'locking',
  meta: {
    title: 'locking-页面已锁定'
  },
  component: resolve => { require(['@/views/layout/functions/lockscreen/components/locking-page.vue'], resolve) }
}

export const page404 = {
  path: '/*',
  name: 'error-404',
  meta: {
    title: '404-页面不存在'
  },
  component: resolve => { require(['@/views/error-page/404.vue'], resolve) }
}

export const page403 = {
  path: '/403',
  meta: {
    title: '403-权限不足'
  },
  name: 'error-403',
  component: resolve => { require(['@//views/error-page/403.vue'], resolve) }
}

export const page500 = {
  path: '/500',
  meta: {
    title: '500-服务端错误'
  },
  name: 'error-500',
  component: resolve => { require(['@/views/error-page/500.vue'], resolve) }
}

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
  path: '/',
  name: 'otherRouter',
  component: Content,
  children: [
    {
      path: 'home',
      title: {i18n: 'home'},
      name: 'home_index',
      component: resolve => { require(['@/views/home/home.vue'], resolve) }
    }
  ]
}

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = []

function buildRouters (item) {
  item.forEach(function (item) {
    if (item.type === 'app') {
      appRouter.push(item)
      if (item.actions && item.actions.length) {
        item.actions.forEach(function (subItem) {
          otherRouter.children.push(subItem)
        })
      }
    } else {
      otherRouter.children.push(item)
    }
  })
}

buildRouters(dynamicRouter)

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
  loginRouter,
  locking,
  otherRouter,
  ...appRouter,
  page500,
  page403,
  page404
]
