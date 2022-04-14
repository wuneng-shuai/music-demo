<!--  -->
<template>
  <div class="menu_content">
    <div class="title_content">
      欢迎听歌
    </div>
    <el-row class="tac">
      <el-col>
        <div class="title_on_line">在线音乐</div>
        <el-menu default-active="/recommend" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
          router>
          <!-- 推荐 -->
          <el-menu-item index="/recommend">
            <span>推荐</span>
          </el-menu-item>
          <!-- 音乐馆 -->
          <el-menu-item index="/music">
            <span>音乐馆</span>
          </el-menu-item>
          <el-menu-item index="/video">
            <span>视频</span>
          </el-menu-item>
          <el-menu-item index="/radioStation">
            <span>电台</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script lang='ts'>
import router from '@/router'
export default {
  setup () {
    const handleOpen = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
      router.push(key)
    }
    const handleClose = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }
    return {
      handleOpen,
      handleClose
    }
  }
}
</script>
<style lang="scss">
.el-menu {
  background-color: unset !important;
}

.menu_content {
  .title_content {
    margin: 20px auto;
    color: red;
  }

  .title_on_line {
    text-align: left !important;
    font-size: 16px !important;
  }
}
</style>
