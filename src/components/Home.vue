<template>
<!-- <div><Mheader>HOME</Mheader> -->
<div class="secon"><router-link to='detail'>ss</router-link>/div>
    
</div>
    </template>

<script>
import Mheader from '../base/Mheader'
import data from './test.js'
export default {
    mounted(){
       console.log(data.then(d=>{
           console.log(d.config.params,'sss')
       }))
    },
    components:{
        Mheader
    },
   
    created(){
        console.log(this.$store)
       document.title='home'
    //    console.log(this.$router.options.routes,'aa')
  this.$store.commit('increment');
//   console.log(this.$nextTick(this.$store.state.count))
    },
    methods:{

    }
}
</script>

<style>
.secon{
    padding-top: 3rem;
    
}
</style>
