<template >
  <div>
    <!-- <el-button type='success'>sss</el-button> -->
    <router-view></router-view>
    <Tab :a='a' :b='b' @c='()=>{console.log("c")}' @d='()=>{console.log("d")}'></Tab>
    <div id="main">a</div>
  </div>
</template>

<script>
import Tab from "./base/Tab";
// import echarts from 'echarts'
// var echarts = require('echarts');
// var myChart = echarts.init(document.getElementById('main'));
// console.log(echarts)

export default {
   provide:{
    abc:123
  },
      data(){
        return {a:1,b:2,c:3}
      },
  mounted() {
    // this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例

      let myChart = this.$echarts.init(document.getElementById("main"));
      // 绘制图表
     
      myChart.setOption({
        title: { text: "在Vue中使用echarts",
        left:'center',
        size:20
         },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        toolbox:{
          dataZoom:true,
          show:true,
        },
        yAxis: {},
        series: [
          {
           
            name: "销量",
            type: "line",
            data: [5, 20, 36, 10, 10, 20]
          },
            {
            name: "销量",
            type: "line",
            data: [6, 10, 32, 20, 20, 30]
          }
        ]
      });
    }
  },
    components: {
      Tab
    }
};
</script>

<style>
html,
body,
h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol,
li,
button,
img {
  margin: 0;
  padding: 0;
}
ul,
li {
  list-style: none;
}
img {
  width: 100%;
}
a {
  text-decoration: none;
}
#main {
  margin-left:1rem;

  width: 3rem;
  height: 3rem;
}
</style>
