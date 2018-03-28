<template>
  <div :class="[theme]">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    theme: function () {
      return this.$store.state.app.themeName
    }
  },
  mounted () {

  },
  beforeCreate: function () {
    let bodyClass = document.getElementsByTagName('body')[0].className
    if (this.$store.state.app.sidebarStatus === 'collapse') {
      bodyClass += ' sidebar-collapse'
    }
    document.getElementsByTagName('body')[0].className = bodyClass
  },
  methods: {}
}
</script>
