<template>
  <div>
    <b-card v-if="myprof">
        <b-form-file id='file_input1' v-model='file'></b-form-file>
          <br> Selected file: {{file && file.name}} <br>
         <span> <b-input type='text' placeholder='username' v-model='caption'></b-input></span>
        <b-button @click='add'>Submit</b-button>
      </b-card>
  </div>
</template>

<script>
import router from '../router'
import axios from 'axios'
export default {
  name: 'Updateprofile',
  data () {
    return {
      caption: '',
      myprof: []
    }
  },
  created () {
    this.mydata()
  },
  methods: {
    add () {
      let token = localStorage.getItem('token')
      let formdata = new FormData()
      formdata.append('username', this.caption)
      formdata.append('profileImg', document.getElementById('file_input1').files[0])
      axios
        .put(`http://localhost:3000/users/editprofile`, formdata, {
          headers: { authorization: token }
        })
        .then(response => {
          this.caption = ''
          router.push({name: 'Mypage'})
        })
        .catch(err => {
          console.log(err)
        })
    },
    mydata () {
      let token = localStorage.getItem('token')
      axios.get(`http://localhost:3000/users/myprofile`, {headers: { authorization: token }})
        .then(response => {
          this.myprof = response.data.data
        }).catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>
