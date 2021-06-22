<template>
  <el-button type="info" @click="signOut">退出</el-button>
</template>

<script>
export default {
  name: '',
  data() {
    return {}
  },
  methods: {
    signOut() {
      window.sessionStorage.clear()
      // location.reload()
      this.$router.push('/login')
    },
  },
}
</script>
<style scoped></style>
