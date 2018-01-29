<template>

<div id="mychart">
    


</div>



</template>




<script type="es6">
  import echarts from 'echarts'
 const myoption = {
     title:{
         text:'项目统计图－PPP项目',
         textStyle:{
             color:'#666',
             lineHeight:'30px',
             fontSize:'18',
             fontFamily:'Apple LiGothic Medium,SimHei',
             
         },
         left:20,
         top:20,
     },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
     legend:{
            show:true,
            bottom:30,
            right:250,
            orient:'vertical',
            data:[{name:'未投资项目',icon:'circle'},{name:'已投资项目',icon:'circle'}],
    },
    series: [{
        name: 'ppp项目-',
        type: 'pie',
        radius: '68%',
        color:['#1598db','#feb867'],
        center: ['50%', '50%'],
        radius: ['40%', '70%'],
        clockwise: false,
        data: [{
            value: 25,
            name: '未投资项目'
        }, {
            value: 45,
            name: '已投资项目'
        }],
        label: {
            normal: {
                textStyle: {
                    
                    fontSize: 25,
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
       
        itemStyle: {
            normal: {
                borderWidth: 0,
                borderColor: '#ffffff',
                
            },
            emphasis: {
                borderWidth: 0,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }],
    color: [
        '#00acee',
        '#52cdd5',
        '#79d9f1',
        '#a7e7ff',
        '#c8efff'
    ],
    backgroundColor: '#fff'
};


  export default({
    name: 'bottom',
    data () {
      return {

      }
  },
  created: function () {
  },
//el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。如果 root 实例
//挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。
//注意 mounted 不会承诺所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以用
 //vm.$nextTick 替换掉 mounted：
 //一定要使用mounted来加载echart  否则会报错。报错内容为：echart.js还没有加载 init会认为是getabbr
//不生效  所以要用ounted来实现


//知识点二  一定要在引入echart之后再去init  而且不能写两个script标签 否则浏览器会一起解析  导致还是没有引入
mounted() {

     let myChart = document.getElementById("mychart")
     this.myChart = echarts.init(myChart)
     this.myChart.setOption(myoption)
    },
  methods: {
  }
  })
    
</script>

<style scoped>
    #mychart{
        width:1680px;
        margin:0 auto;
        background:#fff;
        height:459px;
    }
</style>