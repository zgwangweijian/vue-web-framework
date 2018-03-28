<template>
  <div class="wrapper">
    <app-header></app-header>

    <app-sidebar></app-sidebar>

    <div class="content-wrapper">
      <app-content-header></app-content-header>
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

export default {
  name: 'Content',
  components: {
    'app-sidebar': Sidebar,
    'app-header': Header,
    'app-footer': Footer,
    'app-content-header': ContentHeader
  }
}
</script>
<style lang="sass">
  @import "./../styles/main.scss"
</style>
