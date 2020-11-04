<template>
<b-navbar toggleable="md" type="dark" class="mb-4" variant="dark">
<b-navbar-brand  to="/">Nav guards</b-navbar-brand>
  <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
  <b-collapse id="nav-collapse" is-nav>
    <b-navbar-nav class="mr-auto">
    <b-nav-item>
      <b-link to="/dashboard">Dashboard</b-link>
    </b-nav-item>
    </b-navbar-nav>
  </b-collapse>
</b-navbar>
</template>

<script>

export default {
name: "Navbar"
}
</script>

<style scoped>

</style>
