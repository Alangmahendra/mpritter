<template>
  <div role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion1 variant="info">SignUp</b-btn>
      </b-card-header>
      <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
         <b-form-group>
           <b-form-input type="email" placeholder="email" v-model="email"></b-form-input>
           <b-form-input type="text" placeholder="password" v-model="password"></b-form-input>
           <b-button @click="signup">Daftar</b-button>
         </b-form-group>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion2 variant="info">SignIn</b-btn>
      </b-card-header>
      <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
           <b-form-group>
           <b-form-input type="email" placeholder="email" v-model="email"></b-form-input>
           <b-form-input type="text" placeholder="password" v-model="password"></b-form-input>
           <b-button @click="signin">Masuk</b-button>
         </b-form-group>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>
<script>
import axios from 'axios'
import router from '@/router'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''

    }
  },
  methods: {
    signin () {
      axios.post(`http://localhost:3000/users/signin`, {
        email: this.email,
        password: this.password
      }).then(response => {
        console.log(response.data.token)
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('userid', response.data.userid)
        router.push({name: 'Home'})
      }).catch(err => {
        console.log(err)
      })
    },
    signup () {
      axios.post(`http://localhost:3000/users/signup`, {
        email: this.email,
        password: this.password
      }).then(response => {
        console.log('masuk')
        console.log(response.data)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
<style scoped>

</style>
