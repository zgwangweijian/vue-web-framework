<template>
  <div style="display:inline-block;padding:0 6px;">
    <Dropdown trigger="click" @on-click="setTheme">
      <a href="javascript:void(0)">
        <Icon :style="{marginTop: '-2px', verticalAlign: 'middle'}" color="#495060" :size="18"
              type="paintbucket"></Icon>
        <Icon type="arrow-down-b"></Icon>
      </a>
      <DropdownMenu slot="list">
        <DropdownItem v-for="(item, index) in themeList" :key="index" :name="item.key">
          <Row type="flex" justify="center" align="middle">
            <a href="javascript:void(0);"
               style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">
              <div style="width:50px;">
                <span :style="{ background: item.logo}" style="display:block; width: 20%; float: left; height: 7px;"></span>
                <span :style="{ background: item.head}" style="display:block; width: 80%; float: left; height: 7px;"></span>
              </div>
              <div style="width:50px;">
                <span :style="{ background: item.menu}" style="display:block; width: 20%; float: left; height: 20px;"></span>
                <span :style="{ background: item.body}" style="display:block; width: 80%; float: left; height: 20px;"></span>
              </div>
            </a>
          </Row>
          <Row type="flex" justify="center" align="middle">
            <p>{{ item.name }}</p>
          </Row>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
import Cookies from 'js-cookie'

export default {
  name: 'themeSwitch',
  data () {
    return {
      themeList: [
        {
          name: 'Custom',
          key: 'skin-custom',
          logo: '#3c8dbc',
          head: '#3c8dbc',
          menu: '#f6f6f6',
          body: '#ffffff'
        },
        {
          name: 'Blue',
          key: 'skin-blue',
          logo: '#367fa9',
          head: '#3c8dbc',
          menu: '#222d32',
          body: '#f4f5f7'
        },
        {
          name: 'Black',
          key: 'skin-black',
          logo: '#fefefe',
          head: '#fefefe',
          menu: '#222d32',
          body: '#f4f5f7'
        },
        {
          name: 'Purple',
          key: 'skin-purple',
          logo: '#555299',
          head: '#605ca8',
          menu: '#222d32',
          body: '#f4f5f7'
        },
        {
          name: 'Green',
          key: 'skin-green',
          logo: '#008d4c',
          head: '#00a65a',
          menu: '#222d32',
          body: '#f4f5f7'
        },
        {
          name: 'Red',
          key: 'skin-red',
          logo: '#d33724',
          head: '#dd4b39',
          menu: '#222d32',
          body: '#f4f5f7'
        },
        {
          name: 'Yellow',
          key: 'skin-yellow',
          logo: '#db8b0b',
          head: '#f39c12',
          menu: '#222d32',
          body: '#f4f5f7'
        },
        {
          name: 'Blue Light',
          key: 'skin-blue-light',
          logo: '#367fa9',
          head: '#3c8dbc',
          menu: '#f9fafc',
          body: '#f4f5f7'
        },
        {
          name: 'Black Light',
          key: 'skin-black-light',
          logo: '#fefefe',
          head: '#fefefe',
          menu: '#f9fafc',
          body: '#f4f5f7'
        },
        {
          name: 'Purple Light',
          key: 'skin-purple-light',
          logo: '#555299',
          head: '#605ca8',
          menu: '#f9fafc',
          body: '#f4f5f7'
        },
        {
          name: 'Green Light',
          key: 'skin-green-light',
          logo: '#008d4c',
          head: '#00a65a',
          menu: '#f9fafc',
          body: '#f4f5f7'
        },
        {
          name: 'Red Light',
          key: 'skin-red-light',
          logo: '#d33724',
          head: '#dd4b39',
          menu: '#f9fafc',
          body: '#f4f5f7'
        },
        {
          name: 'Yellow Light',
          key: 'skin-yellow-light',
          logo: '#db8b0b',
          head: '#f39c12',
          menu: '#f9fafc',
          body: '#f4f5f7'
        }
      ]
    }
  },
  methods: {
    setTheme (theme) {
      let userName = Cookies.get('user')
      if (localStorage.theme) {
        let themeList = JSON.parse(localStorage.theme)
        let index = 0
        let hasThisUser = themeList.some((item, i) => {
          if (item.userName === userName) {
            index = i
            return true
          } else {
            return false
          }
        })
        if (hasThisUser) {
          themeList[index].themeName = theme
        } else {
          themeList.push({
            userName: userName,
            themeName: theme
          })
        }
        localStorage.theme = JSON.stringify(themeList)
      } else {
        localStorage.theme = JSON.stringify([{
          userName: userName,
          themeName: theme
        }])
      }

      this.$store.commit('changeTheme', theme)
    }
  },
  created () {
    let name = Cookies.get('user')
    if (localStorage.theme) {
      let hasThisUser = JSON.parse(localStorage.theme).some(item => {
        if (item.userName === name) {
          this.$store.commit('changeTheme', item.themeName)
          return true
        } else {
          return false
        }
      })
      if (!hasThisUser) {
        this.$store.commit('changeTheme', 'skin-custom')
      }
    } else {
      this.$store.commit('changeTheme', 'skin-custom')
    }
  }
}
</script>
