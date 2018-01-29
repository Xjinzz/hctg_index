<template>
    <div id="contentInnerTop">
        <!-- 首页内容 -->
        <div id="content_top">
            <el-row :gutter="24" >

  <el-col :span="5" :offset="1">
      <div class="grid-content bg-white">
        <center class="top_title">项目总数</center>
        <div class="top_content"><span>{{num1}}</span>个</div>
    </div>
  </el-col>
  <el-col :span="5" :offset="3"><div class="grid-content bg-white">
        <center class="top_title">投资总金额</center>
        <div class="top_content"><span>{{num2}}</span>万元</div>
      </div></el-col>
  <el-col :span="5" :offset="3"><div class="grid-content bg-white">
      
      <center class="top_title">总收益额</center>
        <div class="top_content"><span>{{num3}}</span>万元</div>
      
      
      </div></el-col>
</el-row>

        </div>
        
        
    </div>
</template>
<script>
export default{
    name:'index',
    data(){
        return{
            num1:304,
            num2:4193,
            num3:8451
        }
    }
}

</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
    margin-top:20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .bg-white {
    background: #fff;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 148px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .top_title{
      position:relative;
      top:24px;
      color:#999;

  }
  .top_content{
      position:relative;
      top:40px;
      font-size:16px;
      text-align:center;

  }
  .top_content span{
      
          font-size:30px;
          font-weight:800;

      
  }

</style>