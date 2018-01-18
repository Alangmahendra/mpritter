<template>
  <div>
   <b-form-input type="text"  maxlength="140" v-model="caption"></b-form-input>
   <b-button variant="primary" @click="add">ADD</b-button>
  </div>
</template>
<script>
import axios from 'axios'
import router from '../router'

export default {
  name: 'Mypage',

  data () {
    return {
      mypost: [],
      caption: ''
    }
  },
  created () {
    this.getmypost()
  },
  methods: {
    add () {
      let token = localStorage.getItem('token')
      let formdata = new FormData()
      formdata.append('post', this.caption)
      axios
        .post(`http://localhost:3000/post`, {post: this.caption}, {
          headers: { authorization: token }
        })
        .then(response => {
          this.mypost.push(response.data.data)
          this.caption = ''
          this.caption = null
        })
        .catch(err => {
          console.log(err)
        })
    },
    getmypost () {
      let token = localStorage.getItem('token')
      axios
        .get(`http://localhost:3000/post/mypost`, {
          headers: { authorization: token }
        })
        .then(response => {
          console.log(response.data.data)
          this.mypost = response.data.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    remove (id) {
      let token = localStorage.getItem('token')
      axios.delete(`http://localhost:3000/posts/${id}`, {headers: {authorization: token}})
        .then(response => {
          let i = this.mypost.findIndex(post => post._id === id)
          return this.mypost.splice(i, 1)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
<style scoped>
  .rapihin{
    margin:10px 50px 10px 50px
  }
  img {
  width: 100%;
  display: block
}
</style>
