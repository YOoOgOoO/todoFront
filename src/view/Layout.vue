<template>
  <el-container style="height: 614px; border: 1px solid #eee">
      <el-header class="header" height="64px">
        <el-col :span="4">1</el-col>
        <el-col :span="4" style="height:100%; background-color:blue">
          <el-col :span="12">Stos Aristov</el-col>
          <el-col :span="4"><el-avatar  shape="square" :size="size" :src="squareUrl"></el-avatar></el-col>
          <el-col :span="2">
            <el-dropdown>
                <span class="el-dropdown-link">
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu>
                <el-dropdown-item command="a">黄金糕</el-dropdown-item>
                <el-dropdown-item command="b">狮子头</el-dropdown-item>
                <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
              </el-dropdown-menu>
          </el-dropdown>
          </el-col>
        </el-col>
        <el-col :span="10">4</el-col>
        <el-col :span="3">
          <el-input
              type="text"
              prefix-icon="el-icon-search"
              v-model="kb_content"
              placeholder="请输入"
              @keyup.enter.native="getAllKb"
            ></el-input>
        </el-col>
        <el-col :span="1">
          <i class="el-icon-message-solid"></i>
        </el-col>
      </el-header>
    <el-container>
      <el-aside class="tabbar" width="160px">
        <el-row>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1"  @click="navToHome">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">活动广场</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-menu"></i>
              <span slot="title">活动管理</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-menu"></i>
              <span slot="title">消息管理</span>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-menu"></i>
              <span slot="title">地图</span>
            </el-menu-item>
          </el-menu>
        </el-row>
        <el-row>
          <el-col span='12'><span>Create Activity</span></el-col>
          <el-col span='12'><span>image</span></el-col>
        </el-row>
        <el-row>
          <el-col :span="24"><span>image</span></el-col>
        </el-row>
      </el-aside>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

let Layout = {
  name: 'Login',
  methods: {
    navToHome () {
      this.$router.push(
        {path: '/home'}
      )
    }
  }
}

export default Layout
</script>

<style>
  html, body{
    margin: 0;
    padding: 0;
  }

  .header{
    background-color: red;
  }

  .tabbar{
    background-color: blue;
  }

  .main{
    background-color: yellow;
  }
</style>
