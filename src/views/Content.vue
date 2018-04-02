<template>
  <div class="wrapper">
    <app-header></app-header>

    <app-sidebar :menu-list="menuList"></app-sidebar>

    <div class="content-wrapper">
      <app-content-header :pageTagsList="pageTagsList"></app-content-header>
      <section class="content">
        <router-view></router-view>
      </section>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Sidebar from './layout/Sidebar.vue'
import Header from './layout/Header.vue'
import Footer from './layout/Footer.vue'
import ContentHeader from './layout/ContentHeader.vue'
import util from '../libs/util'

export default {
  name: 'Content',
  components: {
    'app-sidebar': Sidebar,
    'app-header': Header,
    'app-footer': Footer,
    'app-content-header': ContentHeader
  },
  computed: {
    menuList () {
      return this.$store.state.app.menuList
    },
    currentPath () {
      return this.$store.state.app.currentPath
    },
    cachePage () {
      return this.$store.state.app.cachePage
    },
    pageTagsList () {
      return this.$store.state.app.pageOpenedList // 打开的页面的页面对象
    }
  },
  methods: {
    checkTag (name) {
      let openpageHasTag = this.pageTagsList.some(item => {
        if (item.name === name) {
          return true
        }
      })
      if (!openpageHasTag) { //  解决关闭当前标签后再点击回退按钮会退到当前页时没有标签的问题
        util.openNewPage(this, name, this.$route.params || {}, this.$route.query || {})
      }
    }
  }
}
</script>
<style lang="sass">
  @import "./../styles/main.scss"
</style>
