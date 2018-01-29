<template>
  <div>
      <div class="headerleft">
          <img src="../../static/img/header.jpg" alt="">
      </div>
      <div class="headerright">
          <ul>
              <li><img src="../../static/img/user.png" alt=""></li>
              <li><img src="../../static/img/shezhi.png" alt=""></li>
              <li><img src="../../static/img/shutdown.png" alt=""></li>
          </ul>
      </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
.headerleft{
    width:626px;
    display:inline-block;
}
.headerright{
    width:508px;
    display: inline-block;
    
    float:right
}
.headerright ul li{
    float: left;
    width:32%;
    border-left:1px solid #eee;
    height: 64px;
    text-align: center
    
}
.headerright ul li img{
    margin-top:20px;
}
</style>

