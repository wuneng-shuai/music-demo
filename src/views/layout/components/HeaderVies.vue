<!--suppress ALL -->

<template>
  <div class="header_content">
    <div class="search_content">
      <el-input v-model="searchValue" placeholder="搜索音乐" :prefix-icon="Search" />
    </div>
    <div class="user_content">
      <div class="login_content_text">
        <el-button type="text" @click="loginDialog">登陆</el-button>
      </div>
      <!-- <div class="login—_content">
        <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar :src="circleUrl" />
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>我的主页</el-dropdown-item>
            <el-dropdown-item>我的等级</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div> -->
      <div class="user_name">帅</div>
    </div>
    <div class="dialog_content">
      <el-dialog v-model="loginVisible" title="登陆" width="50%" :before-close="handleClose">
        <div class="from_content">
          <div class="password_content">
            <el-form
              ref="ruleFormRef"
              :model="ruleForm"
              status-icon
              label-width="120px"
              class="demo-ruleForm"
            >
              <el-form-item label="手机号">
                <el-input v-model="ruleForm.phone"  autocomplete="off" />
              </el-form-item>
              <el-form-item label="登陆密码">
                <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
              </el-form-item>
            </el-form>
           <div class="button"> <el-button type="primary" @click="loginOk">登陆</el-button></div>
          </div>
          <div class="qr_content">
            <span>使用网易云app扫码登陆</span>
            <el-image
              style="width: 100px; height: 100px"
              :src="qrimg"
              :preview-src-list="srcList"
              fit="cover"
            />
          </div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script lang='ts'>
/* eslint-disable */
import { ref, reactive } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { getLoginKye, getQrCreate,login } from '@/api/login'
import { useStore } from 'vuex'
export default {
  setup () {
    // 搜索音乐逻辑
    const searchValue = ref('')
    const loginVisible = ref(false)
    // 右侧信息展示逻辑
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const circleUrl = ref('http://thirdqq.qlogo.cn/g?b=sdk&k=ViaBYvJEC0GxgXKI9iaHdFww&s=140&t=1648115594')
    // 登陆弹窗打开
    let qrimg = ref('')
    const loginDialog = async () => {
      loginVisible.value = true
      // 获取二维码key
      const res = await getLoginKye()
      const params = {
        key: res.data.data.unikey,
        qrimg: true
      }
      const qr = await getQrCreate(params)
      qrimg = qr.data.data.qrimg
    }
    // 登陆
    const ruleForm = reactive({
      phone:"",
      password:''
    })
    const store = useStore()
    const loginOk =  async () => {
      await store.dispatch('user/login', ruleForm)
      loginVisible.value=false
    }
    // 弹出框逻辑
    const handleClose = (done: () => void) => {
      done()
    }
    return {
      Search,
      searchValue,
      loginVisible,
      ruleForm,
      qrimg,
      loginDialog,
      loginOk,
      handleClose
    }
  }
}
</script>
<style lang="scss">
.el-header {
  margin: 0;
  padding: 0;

  // background-color: #1e1e20;
  .header_content {
    position: relative;
    width: 100%;
    height: 100%;

    .search_content {
      position: absolute;
      top: 20px;
      left: 10%;

      .el-input {
        width: 300px;

        .el-input__inner {
          border-radius: 10px;
        }
      }
    }

    .user_content {
      display: flex;
      position: relative;
      top: 20px;
      left: 60%;

      .login_content_text {
        position: absolute;
        top: 5px;
        margin-left: 20px;

        .el-button--text {
          color: black;
        }
      }

      .login_content {
        position: absolute;
        margin-left: 20px;
      }

      .user_name {
        position: absolute;
        top: 10px;
        margin-left: 70px;
      }
    }
  }
.dialog_content{
  .from_content{
    display: flex;
    .password_content{
      margin-top:60px !important;
      .button{
        margin-left: 50%;
      }
    }
    .qr_content{
      margin-left: 15%;
      span{
        padding-left: 15px;
        display: block;
      }
     img{
       //display: block;
     }
  }
  }
}
}
</style>
