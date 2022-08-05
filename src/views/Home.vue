<template>
  <div class="page">
    <h2>Home Page</h2>
    <el-button type="primary" @click="testAxios()">测试axios调用</el-button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'Home',
    methods:{
      testAxios(){
        axios.get('http://192.168.40.9:8080')
        .then(res=>{
          alert(res.data)
        }).catch(error=>{
          alert(error)
        })
      }
    }
}
</script>

<style>

</style>