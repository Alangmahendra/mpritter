<template>
  <div>
    <div>
        <b-card :img-src="profile.profileImg"
                img-alt="Card image"
                img-top>
            <p class="card-text">
                {{profile.username}} <br>
                <b-button variant="primary" v-on:click="pindah">update profile</b-button>
            </p>
        </b-card>
    </div>
    <div>
   <b-form-input type="text"  maxlength="140" v-model="caption"></b-form-input>
   <b-button variant="primary" @click="add">ADD</b-button>
  </div>
  <div >
       <b-card v-for="list in mypost" :key="list._id">
          <b-card :title="list.post"
            :sub-title="list.creator.email">
        <a href="#"
           class="card-link">delete</a>
        <b-link href="#"
                class="card-link">Another link</b-link>
    </b-card>
       </b-card>
  </div>
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
      caption: '',
      profile: {}
    }
  },
  created () {
    this.getmypost()
  },
  methods: {
    pindah () {
      router.push({name: 'Updateprofile'})
    },
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
        .get(`http://localhost:3000/post/allmy`, {
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
    },
    myprofile () {
      let token = localStorage.getItem('token')
      axios
        .get(`http://localhost:3000/users/myprofile`, {
          headers: { authorization: token }
        })
        .then(response => {
          console.log(response.data.data)
          this.profile = response.data.data
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
