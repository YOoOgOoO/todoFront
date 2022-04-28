<template>
  <el-container style="height: 650px; border: 1px solid #eee">
      <el-header class="header" height="64px">
        <el-col :span="6">
          <div class="image-logo">
            <el-image :src="'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'"></el-image>
          </div>
        </el-col>
        <el-col :span="4" style="height:100%; background-color:#fff;">
          <el-col :span="14"><span class="user-name">Stos Aristov</span></el-col>
          <el-col :span="4"><el-avatar  shape="square" :size="size" :src="squareUrl" class="user-avatar"></el-avatar></el-col>
          <el-col :span="2">
            <el-dropdown class="user-more">
                <span class="el-dropdown-link">
                <i class="el-icon-arrow-down"></i>
              </span>
              <el-dropdown-menu>
                <el-dropdown-item command="a">黄金糕</el-dropdown-item>
                <el-dropdown-item command="b">狮子头</el-dropdown-item>
                <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
              </el-dropdown-menu>
          </el-dropdown>
          </el-col>
        </el-col>
        <el-col :span="3">
            <el-input
              type="text"
              prefix-icon="el-icon-search"
              v-model="kb_content"
              placeholder="请输入"
              @keyup.enter.native="getAllKb"
              class="search-bar"
            ></el-input>
        </el-col>
        <el-col :span="1" style="float:right;">
          <div class="message-icon"><i class="el-icon-message-solid"></i></div>
        </el-col>
      </el-header>
    <el-container>
      <el-aside class="tabbar" width="210px">
        <el-row>
          <div class="navbar">
            <el-menu
            default-active="2"
            class="el-menu-vertical-demo navbar-menu"
            @open="handleOpen"
            @close="handleClose"
            background-color="#fff"
            text-color="#000"
            active-text-color="#4000e3"
            >
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
          </div>
        </el-row>
        <el-row>
          <div class="createA">
            <el-col span='12'><span class="text-CA">Create Activity</span></el-col>
            <el-col span='12'>
              <div class="image-CA">
              <el-image :src="'/static/plus.png'" style="position:relative; bottom:4px; left:1px;"></el-image>
            </div>
            </el-col>
          </div>
        </el-row>
        <el-row>
          <el-col span='12'>
            <div class="image-footer">
              <el-image :src="'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'"></el-image>
            </div>
          </el-col>
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

  .image-logo{
    width: 80px;
    position: relative;
    top: 5px;
    left: 25px;
  }

  .user-name{
    position: relative;
    top: 22px;
    left: 30px;
    font-weight: 700;
    font-size: 15px;
  }

  .user-avatar{
    position: relative;
    top:15px;
  }

  .user-more{
    position: relative;
    top: 22px;
    left: 13px;
  }

  .message-icon{
    float: right;
    position: relative;
    top: 22px;
    right: 120px;
  }

  .search-bar{
    position: relative;
    top: 12px;
    left: 450px;
  }

  .navbar{
    font-weight: 700;
    width: 180px;
    position: relative;
    top: 50px;
    left: 15px;
    border: 2px solid #333333;
    border-radius: 16px;
  }

  .navbar-menu{
    margin: 10px;
  }

  .createA{
    font-weight: 700;
    width: 180px;
    height: 70px;
    border: 2px solid #333333;
    border-radius: 16px;
    position: relative;
    top: 80px;
    left: 15px;
  }

  .text-CA{
    position: relative;
    top: 10px;
    left: 15px;
  }

  .image-CA{
    width: 50px;
    height: 40px;
    background-color: #4000ec;
    border-radius: 10px;
    position: relative;
    top: 13px;
    left: 20px;
  }

  .image-footer{
    width: 150px;
    position: relative;
    top: 100px;
    left: 25px;
  }

  .el-menu-item .span:hover{
    background-color: #fff;
  }

  .header{
    background-color: #fff;
  }

  .tabbar{
    background-color: #fff;
  }

  .main{
    background-color: #f6f6f7;
  }
</style>
