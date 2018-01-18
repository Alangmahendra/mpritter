<template>
  <b-card>
    <allgram v-for="list in allPost" :key="list._id" :list="list" @pushcomment="addcomment"/>
  </b-card>
</template>

<script>
import axios from 'axios'
import allgram from './Allgram'
export default {
  name: 'Home',
  components: {allgram},
  data () {
    return {
      allPost: []
    }
  },
  created () {
    this.getall()
  },
  methods: {
    getall () {
      axios.get(`http://localhost:3000/post`)
        .then(response => {
          console.log(response.data.data)
          this.allPost = response.data.data
        }).catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
<style scoped>
</style>
