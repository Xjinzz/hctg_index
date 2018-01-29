<template>
  <div>
      <el-row style="background:#fff">
  <el-col :span="11" :offset="1"><div class="grid-content bg-purple list_title">{{$store.state.pagename}}</div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple-light">
        <el-col :span="10">
        
            <el-date-picker
          
            type="daterange" range-separator="至"
            start-placeholder="2017-07-01"
            end-placeholder="2017-07-31"
            default-value="2017-07-01" style="margin-top:20px;border-radius:20px;">


            </el-date-picker>
            
        </el-col>

        <el-col :span="9" :offset="4">
      <el-button round size="mini" style="margin-top:25px;">搜索</el-button>
      <el-button round size="mini">添加</el-button>
      <el-button round size="mini">数据导出<i class="el-icon-caret-bottom"></i></el-button>
     </el-col>
      
      
      </div></el-col>
</el-row>
  </div>
</template>
<script>
export default {
    
  data(){
return{
}
  },
  created () {
   
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
</style>


//   
