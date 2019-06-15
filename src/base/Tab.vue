<template>
  <div class="tab">
    <router-link to="/home">
      <i class="iconfont icon-index"></i>首页
    </router-link>
    <router-link to="/list">
      <i class="iconfont icon-chazhaobiaodanliebiao"></i>列表
    </router-link>
    <router-link to="/collection">
      <i class="iconfont icon-shoucang"></i>收藏
    </router-link>
    <router-link to="/add">
      <i class="iconfont icon-add1"></i>添加
    </router-link>
    <list v-bind='$attrs' v-on='$listeners'></list>
  </div>
</template>

<script>
import list from '../components/List'
export default {
  props:["a"],
 
    created(){
        
    },
    components:{
      list
    },
    mounted(){

      console.log(this.$children)
      // console.log(this.$attrs)
      // console.log(this.$listeners)
    },
};
</script>

<style lang='less' scoped>
.tab {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1.3rem;
  font-size: 0.4rem;
  display: flex;
  justify-content: space-between;

  a {
    width: 1rem;
    margin-left: 0.02rem;
    display: flex;
    background: red;
    color: white;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 1;
    i {
      font-size: 0.5rem;
    }
  }
}
</style>
