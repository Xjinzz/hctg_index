<template>
    <div id="pageDiv">
        <div id="header">
          <slot name="myheader"></slot>
        </div>
        <div id="main">
            <div id="menu">

                <slot name="menu"></slot>
            </div>
            <div id="content">
                <router-view/>
            </div>
        </div>
    </div>
</template>
<script>
    
  export default {
      
  };
</script>
<style  scoped>

#pageDiv{
    width:1920px;
    margin:0 auto;
}
#header{
    width:100%;
    height:62px;

}
#main{
    width:100%;
}
#menu{
    width:200px;
    height:1016px;
    background:#2a3137;
    float:left;
    color:#98a4a6;
    
}


#content{
    background:#f5f5f5;
    float:right;
    width:1720px;
    height:1016px;
}
#menu .el-menu-vertical-demo li:hover{
    background:#fff;
}
</style>