<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="info">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#" @click="Mprit">Mprit</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">
    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
      <b-nav-item-dropdown right>
        <!-- Using button-content slot -->
        <template slot="button-content">
          <em>User</em>
        </template>
        <b-dropdown-item href="#" @click="mypage">Myprofile</b-dropdown-item>
        <b-dropdown-item href="#" @click="Login">Login</b-dropdown-item>
        <b-dropdown-item href="#" @click="signout">Signout</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
</div>
</template>
<script>
import router from '@/router'
export default {
  methods: {
    signout () {
      if (localStorage.getItem('token')) {
        alert('signout')
        localStorage.removeItem('token')
        localStorage.removeItem('userid')
        router.push({name: 'Login'})
      } else {
        alert('kalo mau keluar... masuk dulu boss')
        router.push({name: 'Login'})
      }
    },
    Mprit () {
      router.push({name: 'Home'})
    },
    mypage () {
      let token = localStorage.getItem('token')
      if (token) {
        router.push({name: 'Mypage'})
      } else {
        router.push({name: 'Login'})
      }
    },
    Login () {
      router.push({name: 'Login'})
    }
  }
}
</script>
<style scoped>

</style>
