<template>
<div>
 <!-- <Mheader>List</Mheader> -->
<!-- {{msg}} -->
<div class="chinamap" id='chinamap'></div>
</div>
    
</template>

<script>
import ECharts from '../echarts/chainaMap.js'
// import ECharts from 'echarts'
// import "echarts/lib/chart/map";
// import "echarts/map/js/china.js";
import Mheader from '../base/Mheader'
export default {
  name:'list',
  inject:['abc'],
  mounted(){
    this.drapChinaMap();
    // console.log(this.abc,'list')
    // console.log(this.$parent)
    // console.log(this.$attrs)
    // console.log(this.$listeners)
  },
  methods:{
    drapChinaMap(){
      function randomData() {  
       return Math.round(Math.random()*500);  
      }
      console.log('11111111111111111112222222222222222222222222')
      var mydata = [  
                {'name': '北京',value: '1000'},{name: '天津',value: randomData() },  
                {name: '上海',value: randomData() },{name: '重庆',value: randomData() },  
                {name: '河北',value: randomData() },{name: '河南',value: randomData() },  
                {name: '云南',value: randomData() },{name: '辽宁',value: randomData() },  
                {name: '黑龙江',value: randomData() },{name: '湖南',value: randomData() },  
                {name: '安徽',value: randomData() },{name: '山东',value: randomData() },  
                {name: '新疆',value: randomData() },{name: '江苏',value: randomData() },  
                {name: '浙江',value: randomData() },{name: '江西',value: randomData() },  
                {name: '湖北',value: randomData() },{name: '广西',value: randomData() },  
                {name: '甘肃',value: randomData() },{name: '山西',value: randomData() },  
                {name: '内蒙古',value: randomData() },{name: '陕西',value: randomData() },  
                {name: '吉林',value: randomData() },{name: '福建',value: randomData() },  
                {name: '贵州',value: randomData() },{name: '广东',value: randomData() },  
                {name: '青海',value: randomData() },{name: '西藏',value: randomData() },  
                {name: '四川',value: randomData() },{name: '宁夏',value: randomData() },  
                {name: '海南',value: randomData() },{name: '台湾',value: randomData() },  
                {name: '香港',value: randomData() },{name: '澳门',value: randomData() }  
            ];
            console.log('333333333333333333')
 const myChart = ECharts.init(document.getElementById("chinamap"));
    //    myChart.off('click');
       myChart.on('click',(params)=>{
                  console.log(params)
                  console.log(params.event)
       })
       myChart.setOption({  
                backgroundColor: '#FFFFFF',  
                title: {  
                    text: '全国地图大数据',  
                    subtext: '',  
                    x:'left'  
                },  
                tooltip : {  
                  // formatter:"{a} <br/>{b}: {c} ({d}%)",
                    trigger: 'item'  
                },  
          //        dataRange: {
          // show: true,
          // min: 0,
          // max: 1000,
          // x:"left",
          // y:"bottom",
          // text: ["High", "Low"],
          // realtime: true,
          // calculable: true,
          // color: ['#5475f5', '#9feaa5', '#85daef','#74e2ca', '#e6ac53', '#9fb5ea'],
          // textStyle: {
          //   color: "#a3c6ff",
          //   fontSize: 19
          // }
        // },
                //左侧小导航图标
                visualMap: {  
                    show : true,  
                    x: '40',  
                    y: '120px',  
                    splitList: [   
                        {start: 500, end:600},{start: 400, end: 500},  
                        {start: 300, end: 400},{start: 200, end: 300},  
                        {start: 100, end: 200},{start: 0, end: 100},  
                    ],  
                    color: ['#5475f5', '#9feaa5', '#85daef','#74e2ca', '#e6ac53', '#9fb5ea']  
                },  
                
                //配置属性
                series: [{  
                    name: "ssdfaadf",  
                    type: 'map',  
                    mapType: 'china',   
                    roam: true,//设置图标的平移跟缩放  
                    label: {  
                      distance:80,
                      borderRadius:30,
                        normal: {  
                            // color:'blue',
                            show: true  //省份名称  
                        },  
                        emphasis: {
                            borderColor:'blue',
                        areaColor: "red",
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        shadowBlur: 10,
                        borderWidth: 0,
                        shadowColor: "rgba(0, 0, 0, 0.5)"
            }
                    },  
                    data:mydata  //数据
                }]  
            } )
    },
   
  },
     data(){
         return {msg:100}
     },
  // beforeRouteEnter(to, from, next) {
  //   console.log(to);
  //   next(vm => {
  //       vm.$el.style.backgroundColor='blue'
  //     console.log(vm.$el);
  //   });
  // },
  // beforeRouterUpdate(to, from, next) {
  //   console.log("routerUpdate");
  //   next();
  // },
  // beforeRouterLeave(to, from, next) {
  //   console.log("routerLeave");
  //   next();
  // },
components:{
    Mheader
}
}
</script>

<style>
.chinamap{
width:800px;
height: 600px;
background: blue;
}
</style>
