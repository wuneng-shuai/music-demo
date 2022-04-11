<template>
<div class="common-layout">
    <el-container>
      <el-aside width="200px"><asideView></asideView></el-aside>
      <el-container>
        <el-header><HeaderViesVue></HeaderViesVue></el-header>
        <el-main><MainView></MainView></el-main>
        <el-footer><FooterView></FooterView></el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script lang='ts' setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import asideView from './components/asideVies.vue'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import FooterView from './components/FooterView.vue'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import HeaderViesVue from './components/HeaderVies.vue'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import MainView from './components/MainView.vue'
</script>
<style lang="scss">
 .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 100vh;
 }
</style>
