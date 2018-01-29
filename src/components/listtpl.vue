
<template>
<div id="mylist">
  <tableheader></tableheader>

<el-table
    
    v-loading.lock="fullscreenLoading"
    target="#mylist"
    :data="tableData"
    
    :show-header="true"
    border
    style="width: 100%;height:800px;">
    <el-table-column 
      fixed
      prop="name"
      label="项目名称"
      width="280" align="center">
    </el-table-column>
    <el-table-column
      prop="attrbute"
      label="项目属性"
      width="220" align="center">
    </el-table-column>
    <el-table-column
      prop="type"
      label="项目类型"
      width="200" align="center">
    </el-table-column>
    <el-table-column
      prop="field"
      label="行业领域"
      width="222" align="center">
    </el-table-column>
    <el-table-column
      prop="time"
      label="立项时间"
      width="300" align="center">
    </el-table-column>
    <el-table-column
      label="项目图片"
      width="300" align="center">
      <template slot-scope="scope">
<el-button type="text" size="small">查看</el-button>
</template>
    </el-table-column>
    <el-table-column
      label="操作"
      width="200" align="center">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
        <el-button type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-row id="fenye">
  <el-col>
<el-pagination
  background
  layout="prev, pager, next"
  :total="listData.length-13" @current-change="handleCurrentChange">
</el-pagination>
  </el-col>
  </el-row>

</div>
  
</template>
<script>
  import tableheader from "./table_header.vue";
   export default {
    
    methods: {
      handleClick(row) {
        console.log(row);
      },
      openFullScreen() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 2000);
      },
       handleCurrentChange(val) {
        this.start=(`${val}`-1)*13;
        this.end=(`${val}`+1)*13;
         this.tableData=this.listData.slice(this.start,this.end); 
      
      }
    
    },

    created () {
        this.openFullScreen();
        this.tableData=this.listData.slice(this.start,this.end);
         this.$store.commit('changPagename',this.pagename);
        this.$store.commit('changTitle',this.titlenames) 
    },
   
        props:['pagename','titlenames','listData'],
 
    data() {
        
      return {
          tableData: [],
          
          start:0,
          end:13,
          fullscreenLoading: false,
          value8: '2017-07-01',
        value9: '2017-07-31',
       
      }
    },
    components: {
      tableheader
    }
  }

</script>
<style scoped>
    .list_title{
        font-size:18px;
        line-height:78px;
        font-weight: 800;

    }
    #table_title{
        font-size:16px;
        line-height:70px;
        text-align: center
    }
    #fenye{
        width:100%;
        background:#fff;
        text-align:center;
        line-height: 34px;
        padding-top:40px;
    }
</style>
