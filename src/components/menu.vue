<template>
<div>
        <el-col :span="24">
        <el-menu default-active="1" :router="true" :unique-opened="true" class="el-menu-vertical-demo"  @open="handleOpen" @close="handleClose" background-color="#2a3137" text-color="#98a4a6" active-text-color="#fff">
            <el-menu-item index="1" route="/index">
            <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="2">
            <template slot="title">
            
            <span>项目库管理</span>
            </template>
            <el-menu-item index="2-1" route="/project/project_list">项目列表</el-menu-item>
        
            <el-submenu index="2-2">
            <template slot="title">选项2</template>
            <el-menu-item index="2-2-1">选项1</el-menu-item>
            </el-submenu>
        </el-submenu>
    
         <el-submenu index="3">
            <template slot="title">
            
            <span>项目投资管理</span>
            </template>
            <el-menu-item index="3-1" route="/invList/invList">项目列表</el-menu-item>
        
            <el-submenu index="3-2">
            <template slot="title">选项2</template>
            <el-menu-item index="3-2-1">选项1</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-submenu index="4">
            <template>
                <span slot="title">招标管理</span>
            </template>
            <!-- Tender/Notice -->
             <el-menu-item index="4-1" route="/Tender/Notice">项目列表</el-menu-item>

        </el-submenu>
        <el-submenu index="5">
            <template>
                <span slot="title">支出管理</span>    
            </template>
            <el-menu-item index="5-1" route="/Expenditure management/list">
                支出清单
            </el-menu-item>
        </el-submenu>
        <el-menu-item index="6">
            <span slot="title">项目收益分析</span>
        </el-menu-item>


        



        </el-menu>
    </el-col>
    </el-row>
</div>
</template>
<script>
export default {
    data() {
      return {

        
      };
    },
    methods: {
      
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    
    }
}
</script>

