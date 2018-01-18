<template>
  <div >
    <b-card :title="list.post"
            :sub-title="list.creator.email">
    </b-card>
  </div>
</template>
<script>
// import axios from 'axios'
import router from '@/router'
export default {
  props: ['list'],
  data () {
    return {
    }
  },
  methods: {
    toOtherUserPage (id) {
      console.log(id)
      let userid = localStorage.getItem('userid')
      let token = localStorage.getItem('token')
      if (token) {
        if (id === userid) {
          router.push({ name: 'Myprofile' })
        } else {
          router.push({ name: 'Otherprofile', params: { id: id } })
        }
      } else {
        alert('masuk dulu boss')
      }
    },
    detail (id) {
      // router.push({ name:"Detailpost", params: { id: id } })
    }
  }
}
</script>
<style scoped>
.rapihin {
  margin: 10px 50px 70px 50px;
}
img {
  width: 100%;
  display: block;
}
.blue{
  color:blue;
  cursor: pointer;
}
</style>
