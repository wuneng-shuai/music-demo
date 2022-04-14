<template>
<div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <AsideView></AsideView>
      </el-aside>
      <el-container>
        <el-header><HeaderViesVue></HeaderViesVue></el-header>
        <el-main> <router-view></router-view></el-main>
        <el-footer><FooterView></FooterView></el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script lang='ts' setup>
import AsideView from './components/asideVies.vue'
import FooterView from './components/FooterView.vue'
import HeaderViesVue from './components/HeaderVies.vue'
</script>
<style lang="scss">
.el-container:nth-child(2){
   background: url(../../assets/bg.jpeg) center center no-repeat;
  background-size: 100% 100%;
}
 .el-aside {
        color: #333;
        text-align: center;
        height: 100vh;
        background-color: skyblue;
 }
</style>
