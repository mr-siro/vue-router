<template>
  <div>
    <h1>Dashboard</h1>
    <b-button variant="danger" @click="logout">Logout</b-button>
  </div>
</template>

<script>

export default {
  name: "Dashboard",
  methods: {
    logout() {
      return new Promise((resolve, reject) => {
        localStorage.removeItem('user');
        resolve("success")
        reject("Error")
      }).then(() => {
        console.log('logout success');
        this.$router.push('/');
      }).catch((error) => console.log(error))
    }
  }
}
</script>

<style scoped>

</style>
