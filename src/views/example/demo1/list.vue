<template>
  <div>
    <div>list</div>
    <div>
      <Button @click="add" type="primary" long>新建</Button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'demo1List',
  methods: {
    add: function () {
      this.$router.push('/example/demo1/create')
    }
  }
}
</script>
