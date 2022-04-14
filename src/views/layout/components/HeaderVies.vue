<!--suppress ALL -->

<template>
  <div class="header_content">
    <div class="search_content">
      <el-input v-model="searchValue" placeholder="搜索音乐" :prefix-icon="Search" />
    </div>
    <div class="user_content">
      <div>
        <div class="login_content_text" v-if="!token">
          <el-button type="text" @click="loginDialog">登陆</el-button>
        </div>
        <div class="login—_content" v-else-if="token">
          <el-dropdown>
            <span class="el-dropdown-link">
              <el-avatar :src="userPhoto" />
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>我的主页</el-dropdown-item>
                <el-dropdown-item>我的等级</el-dropdown-item>
                <el-dropdown-item @click="logout">退出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
      <div class="user_name" v-show="token">{{ userName }}</div>
    </div>
    <div class="dialog_content">
      <el-dialog v-model="loginVisible" title="登陆" width="50%" :before-close="handleClose">
        <div class="from_content">
          <div class="password_content">
            <el-form ref="ruleFormRef" :model="ruleForm" status-icon label-width="120px" class="demo-ruleForm">
              <el-form-item label="手机号">
                <el-input v-model="ruleForm.phone" autocomplete="off" />
              </el-form-item>
              <el-form-item label="登陆密码">
                <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
              </el-form-item>
            </el-form>
            <div class="button">
              <el-button type="primary" @click="loginOk">登陆</el-button>
            </div>
          </div>
          <div class="qr_content">
            <span>使用网易云app扫码登陆</span>
            <el-image style="width: 100px; height: 100px" :src="qrimg" :preview-src-list="srcList" fit="cover" />
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
import { getLoginKye, getQrCreate, login } from '@/api/login'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import {
  getToken,
  getUserName,
  getUserPhoto,
  removeToken
}
  from '@/utils/utils'
export default {
  setup() {
    const store = useStore() //vuex
    const router = useRouter()
    let token: any = ref()
    let userName: any = ref()
    let userPhoto: any = ref()
    token = getToken()
    userName = getUserName()
    userPhoto = getUserPhoto()
    // 搜索音乐逻辑
    const searchValue = ref('')
    const loginVisible = ref(false)
    // 右侧信息展示逻辑
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
      phone: "",
      password: ''
    })
    const loginOk = async () => {
      await store.dispatch('user/login', ruleForm)
      token = getToken()
      userName = getUserName()
      userPhoto = getUserPhoto()
      await loginDialog()
       location.reload()
      loginVisible.value = false
    }
    console.log(token, userName, userPhoto);
    // 弹出框逻辑
    const handleClose = (done: () => void) => {
      done()
    }
    // 退出登陆
    const logout = async () => {
      await store.dispatch('user/logout', ruleForm)
      location.reload()
    }
    return {
      Search,
      searchValue,
      loginVisible,
      ruleForm,
      qrimg,
      token,
      userName,
      userPhoto,
      loginDialog,
      loginOk,
      handleClose,
      logout
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

  .dialog_content {
    .from_content {
      display: flex;

      .password_content {
        margin-top: 60px !important;

        .button {
          margin-left: 50%;
        }
      }

      .qr_content {
        margin-left: 15%;

        span {
          padding-left: 15px;
          display: block;
        }

        img {
          //display: block;
        }
      }
    }
  }
}
</style>
