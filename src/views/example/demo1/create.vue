<template>
  <div>
    <div>create</div>
    <div>
      <Button @click="back" type="primary" long>返回</Button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'demo1Create',
  methods: {
    back: function () {
      this.$router.push('/example/demo1')
    }
  }
}
</script>
