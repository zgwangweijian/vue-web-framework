<template>
  <div style="width: 100%;height: 100%;background: #667aa6">
    <div class="unlock-con">
      <unlock :show-unlock="showUnlock" @on-unlock="handleUnlock"></unlock>
    </div>
  </div>
</template>

<script>
import unlock from './unlock.vue'
import Cookies from 'js-cookie'

const setLockBackSize = () => {
  let x = document.body.clientWidth
  let y = document.body.clientHeight
  let r = Math.sqrt(x * x + y * y)
  return parseInt(r)
}

export default {
  components: {
    unlock
  },
  data () {
    return {
      showUnlock: false
    }
  },
  methods: {
    handleUnlock () {
      let lockScreenBack = document.getElementById('lock_screen_back')
      this.showUnlock = false
      lockScreenBack.style.zIndex = -1
      lockScreenBack.style.boxShadow = '0 0 0 0 #667aa6 inset'
      this.$router.push({
        name: Cookies.get('last_page_name') // 解锁之后跳转到锁屏之前的页面
      })
    }
  },
  mounted () {
    this.showUnlock = true
    if (!document.getElementById('lock_screen_back')) {
      let lockdiv = document.createElement('div')
      lockdiv.setAttribute('id', 'lock_screen_back')
      lockdiv.setAttribute('class', 'lock-screen-back')
      document.body.appendChild(lockdiv)
    }
    let lockScreenBack = document.getElementById('lock_screen_back')
    window.addEventListener('resize', () => {
      let size = setLockBackSize()
      this.lockScreenSize = size
      lockScreenBack.style.transition = 'all 0s'
      lockScreenBack.style.boxShadow = '0 0 0 ' + this.lockScreenSize + 'px #667aa6 inset'
      lockScreenBack.style.width = lockScreenBack.style.height = size + 'px'
    })
    lockScreenBack.style.zIndex = -1
    lockScreenBack.style.transition = 'all 0s'
    lockScreenBack.style.boxShadow = '0 0 0 ' + setLockBackSize() + 'px #667aa6 inset'
    lockScreenBack.style.width = lockScreenBack.style.height = setLockBackSize() + 'px'
  }
}
</script>
