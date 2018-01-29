<template>
<div>
 <listtpl :pagename="pagename" :titlenames='titlename' :listData="listData"></listtpl>
  </div>
</template>
<script>
import listtpl from "./listtpl.vue";
export default {
  data(){
    return{
        pagename:'项目名称',

        titlename:['项目名称','项目金额','合作方式','所属领域','立项时间','图集','操作',],

        listData:[{
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '航空小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '成语小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '新沃资本',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '盛世神州基金',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }, {
          name: '月柿小镇',
          attrbute: '37451万元',
          type: '委托运营',
          field: '自然资源',
          time: '2017-09-19  08:12:30',
        }],
        
    }
  },
 components: {
   listtpl
 },
 
}
</script>
