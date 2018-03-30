<style scoped>
  .main-header .header-middle-con {
    position: absolute;
    left: 60px;
    top: 0;
    right: 340px;
    bottom: 0;
    padding: 10px;
    overflow: hidden;
  }
  .main-breadcrumb {
    padding: 12px 15px;
  }

  .ivu-breadcrumb {
    color: #fff;
    font-size: 14px;
  }

  .ivu-breadcrumb a {
    color: #fff;
    transition: color .2s ease-in-out;
  }
</style>
<template>
  <header class="main-header">
    <router-link to="/dashboard" class="logo">
      <span class="logo-mini"><b>L</b>Soft</span>
      <span class="logo-lg"><b>Leading</b>Soft</span>
    </router-link>
    <nav class="navbar navbar-static-top">
      <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button" @click="recordSidebarStatus">
        <Icon type="navicon-round"></Icon>
        <span class="sr-only">{{ $t('ToggleNavigation') }}</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </a>
      <div class="breadcrumb-area">
        <div class="header-middle-con">
          <div class="main-breadcrumb">
            <div class="ivu-breadcrumb">
              <span>
                <a class="ivu-breadcrumb-item-link">首页</a>
                <span class="ivu-breadcrumb-item-separator">/</span>
              </span>
              <span>
                <span class="ivu-breadcrumb-item-link">组件</span>
                <span class="ivu-breadcrumb-item-separator">/</span>
              </span>
              <span>
                <a class="ivu-breadcrumb-item-link">Markdown编辑器</a>
                <span class="ivu-breadcrumb-item-separator">/</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <li class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <img src="./../../assets/img/avatar2.png" class="user-image" alt="User Image">
              <span class="hidden-xs">王伟健</span>
            </a>
            <ul class="dropdown-menu">
              <li class="user-header">
                <img src="./../../assets/img/avatar2.png" class="img-circle" alt="User Image">
                <p>
                  王伟健 - 系统管理员
                </p>
              </li>
              <li class="user-footer">
                <div class="pull-left">
                  <a href="#" class="btn btn-default btn-flat">配置文件</a>
                </div>
                <div class="pull-right">
                  <a href="#" class="btn btn-default btn-flat">退出</a>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="navbar-custom-menu">
        <div class="function-area">
          <lock-screen></lock-screen>
          <theme-switch></theme-switch>
          <language-switch></language-switch>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
import lockScreen from './functions/lockscreen/lockscreen.vue'
import themeSwitch from './functions/theme-switch/theme-switch.vue'
import languageSwitch from './functions/language-switch/language-switch.vue'

export default {
  name: 'ContentHeader',
  components: {
    lockScreen,
    themeSwitch,
    languageSwitch
  },
  methods: {
    recordSidebarStatus: function () {
      if (this.$store.state.app.sidebarStatus === 'expand') {
        this.$store.commit('recordSidebarStatus', 'collapse')
      } else {
        this.$store.commit('recordSidebarStatus', 'expand')
      }
    }
  }
}
</script>
