import Content from '@/views/Content.vue'

export const dynamicRouter = [
  {
    type: 'app',
    path: '/group',
    icon: 'fas fa-table',
    name: 'group',
    title: '示例',
    component: Content,
    children: [
      {
        path: 'page1',
        icon: 'fas fa-table',
        name: 'page1',
        title: '示例1',
        component: resolve => { require(['@/views/group/page1/page1.vue'], resolve) }
      },
      {
        path: 'page2',
        icon: 'fas fa-table',
        name: 'page2',
        title: '示例2',
        component: resolve => { require(['@/views/group/page2/page2.vue'], resolve) }
      }
    ]
  },
  {
    type: 'app',
    path: '/example',
    icon: 'fas fa-table',
    name: 'example',
    title: '例子',
    component: Content,
    children: [{
      path: 'demo1',
      name: 'demo1',
      title: '例1',
      component: resolve => { require(['@/views/example/demo1/list.vue'], resolve) }
    }],
    actions: [{
      path: 'example/demo1/create',
      name: 'demo1Create',
      title: '例子1创建',
      component: resolve => { require(['@/views/example/demo1/create.vue'], resolve) }
    }]
  }
]
