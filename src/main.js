import Vue from 'vue'
import iView from 'iview'
import VueI18n from 'vue-i18n'
import { router } from './router/index'
import { appRouter } from './router/router'
import store from './store'
import i18n from './locale'

import 'bootstrap/dist/css/bootstrap.css'
import 'admin-lte/dist/css/AdminLTE.min.css'
import 'admin-lte/dist/css/skins/_all-skins.min.css'
import 'iview/dist/styles/iview.css'

import App from './App.vue'

import 'bootstrap/dist/js/bootstrap.min'
import 'admin-lte/dist/js/adminlte.min'
import 'jquery-slimscroll/jquery.slimscroll.min'

Vue.config.productionTip = false

Vue.use(VueI18n)
Vue.use(iView)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router: router,
  store: store,
  render: h => h(App),
  data: {
    currentPageName: ''
  },
  mounted () {
    this.currentPageName = this.$route.name
    // 显示打开的页面的列表
    this.$store.commit('setOpenedList')
    this.$store.commit('initCachepage')
    // 权限菜单过滤相关
    this.$store.commit('updateMenulist')
  },
  created () {
    let tagsList = []
    appRouter.map((item) => {
      if (item.children.length <= 1) {
        tagsList.push(item.children[0])
      } else {
        tagsList.push(...item.children)
      }
    })
    this.$store.commit('setTagsList', tagsList)
  }
})
