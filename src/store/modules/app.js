import { otherRouter, appRouter } from '@/router/router'
import Util from '@/libs/util'
import Vue from 'vue'

const app = {
  state: {
    cachePage: [],
    lang: localStorage.getItem('lang'),
    openedSubmenuArr: [], // 要展开的菜单数组
    themeName: 'skin-custom', // 主题
    sidebarStatus: !localStorage.getItem('sidebar-status') ? 'expand' : localStorage.getItem('sidebar-status'),
    pageOpenedList: [{
      title: '首页',
      path: '',
      name: 'home_index'
    }],
    currentPageName: '',
    currentPath: [
      {
        title: '首页',
        path: '',
        name: 'home_index'
      }
    ], // 面包屑数组
    menuList: [],
    routers: [
      otherRouter,
      ...appRouter
    ],
    tagsList: [...otherRouter.children],
    dontCache: ['text-editor', 'artical-publish'] // 在这里定义你不想要缓存的页面的name属性值(参见路由配置router.js)
  },
  mutations: {
    changeTheme (state, theme) {
      state.themeName = theme
    },
    recordSidebarStatus (state, sidebarStatus) {
      state.sidebarStatus = sidebarStatus
      localStorage.setItem('sidebar-status', sidebarStatus)
    },
    switchLang (state, lang) {
      state.lang = lang
      Vue.config.lang = lang
    },
    setTagsList (state, list) {
      state.tagsList.push(...list)
    },
    updateMenulist (state) {
      state.menuList = appRouter
    },
    closePage (state, name) {
      state.cachePage.forEach((item, index) => {
        if (item === name) {
          state.cachePage.splice(index, 1)
        }
      })
    },
    initCachepage (state) {
      if (localStorage.cachePage) {
        state.cachePage = JSON.parse(localStorage.cachePage)
      }
    },
    removeTag (state, name) {
      state.pageOpenedList.map((item, index) => {
        if (item.name === name) {
          state.pageOpenedList.splice(index, 1)
        }
      })
    },
    pageOpenedList (state, get) {
      let openedPage = state.pageOpenedList[get.index]
      if (get.argu) {
        openedPage.argu = get.argu
      }
      if (get.query) {
        openedPage.query = get.query
      }
      state.pageOpenedList.splice(get.index, 1, openedPage)
      localStorage.pageOpenedList = JSON.stringify(state.pageOpenedList)
    },
    clearAllTags (state) {
      state.pageOpenedList.splice(1)
      state.cachePage.length = 0
      localStorage.pageOpenedList = JSON.stringify(state.pageOpenedList)
    },
    clearOtherTags (state, vm) {
      let currentName = vm.$route.name
      let currentIndex = 0
      state.pageOpenedList.forEach((item, index) => {
        if (item.name === currentName) {
          currentIndex = index
        }
      })
      if (currentIndex === 0) {
        state.pageOpenedList.splice(1)
      } else {
        state.pageOpenedList.splice(currentIndex + 1)
        state.pageOpenedList.splice(1, currentIndex - 1)
      }
      let newCachepage = state.cachePage.filter(item => {
        return item === currentName
      })
      state.cachePage = newCachepage
      localStorage.pageOpenedList = JSON.stringify(state.pageOpenedList)
    },
    setOpenedList (state) {
      state.pageOpenedList = localStorage.pageOpenedList ? JSON.parse(localStorage.pageOpenedList) : [otherRouter.children[0]]
    },
    setCurrentPath (state, pathArr) {
      state.currentPath = pathArr
    },
    setCurrentPageName (state, name) {
      state.currentPageName = name
    },
    increateTag (state, tagObj) {
      if (!Util.oneOf(tagObj.name, state.dontCache)) {
        state.cachePage.push(tagObj.name)
        localStorage.cachePage = JSON.stringify(state.cachePage)
      }
      state.pageOpenedList.push(tagObj)
      localStorage.pageOpenedList = JSON.stringify(state.pageOpenedList)
    }
  }
}

export default app
