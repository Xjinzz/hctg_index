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
      pagename:'项目名称',
      titlename:['项目名称','项目属性','项目类型','行业领域','立项时间','图集','操作',],

        


        listData:[{
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '鼎信长城基金',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '中城投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '新沃资本',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '盛世神州基金',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }, {
          name: '稳盛投资',
          attrbute: 'ppp项目',
          type: '医疗卫生',
          field: '事业单位',
          time: '2017-09-19  08:12:30',
        }],
        
    }
  },
 components: {
   listtpl
 },
 
}
</script>
