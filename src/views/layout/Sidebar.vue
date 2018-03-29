<template>
  <aside class="main-sidebar">
    <div>
      <section class="sidebar">
        <div class="user-panel">
          <div class="image">
            <img src="./../../assets/img/avatar2.png" alt="User Image" class="img-circle">
          </div>
          <div class="info">
            <p>上午好, 王伟健</p>
            <div>
              <a href="#"><i class="ti-panel"></i>
                <small>设置</small>
              </a>
              <a href="#"><i class="ti-user"></i>
                <small>配置文件</small>
              </a>
              <a href="#"><i class="ti-power-off"></i>
                <small>注销</small>
              </a>
            </div>
          </div>
          <img src="./../../assets/img/avatar-bg.png" alt="User Image" class="bg-user">
        </div>
        <ul class="sidebar-menu" data-widget="tree">
          <li class="treeview">
            <a href="#">
              <i class="ti-layout-media-overlay"></i>
              <span>示例</span>
              <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
            </span>
            </a>
            <ul class="treeview-menu">
              <li>
                <router-link to="/group/page1">
                  <i class="ti-layout-media-overlay"></i>
                  页面1
                </router-link>
              </li>
              <li>
                <router-link to="/group/page2">
                  <i class="ti-layout-media-overlay"></i>
                  页面2
                </router-link>
              </li>
            </ul>
          </li>
          <li class="treeview">
            <a href="#">
              <i class="ti-layout-media-overlay"></i>
              <span>表格示例</span>
              <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
            </span>
            </a>
            <ul class="treeview-menu">
              <li class="active">
                <router-link to="/home">
                  <!--<avatar username="Blank Page" :size='20' color="#fff"></avatar>-->
                  基础表格
                </router-link>
              </li>
              <li>
                <router-link to="/table/hard">
                  <!--<avatar username="Blank Page" :size='20' color="#fff"></avatar>-->
                  分页表格
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  </aside>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'ContentSidebar',
  mounted: function () {
    $(document).ready(function ($) {
      $('.main-sidebar > div').slimScroll({
        width: '230px',
        position: 'left',
        size: '5px',
        height: '95vh'
      })
    })
  }
}
</script>
