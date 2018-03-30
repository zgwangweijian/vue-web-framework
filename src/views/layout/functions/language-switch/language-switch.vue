<template>
  <div class="language-switch-btn-con">
    <Dropdown trigger="click" @on-click="setLanguage">
      <a href="javascript:void(0)">
        <i class="fas fa-flag-checkered"></i>
      </a>
      <DropdownMenu slot="list">
        <DropdownItem v-for="(item, index) in languageList" :key="index" :name="item.key">
          <Row type="flex" justify="center" align="middle">
            <p>{{ item.name }}</p>
          </Row>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>
<script>

export default {
  name: 'languageSwitch',
  data () {
    return {
      languageList: [
        {
          name: '简体中文',
          key: 'zh-CN'
        }, {
          name: 'English',
          key: 'en-US'
        }
      ]
    }
  },
  methods: {
    setLanguage (language) {
      this.$i18n.locale = language
      localStorage.lang = language
      this.$store.commit('switchLang', language)
    }
  }
}
</script>
