<template>
  <el-container style="height: 650px; border: 1px solid #eee">
      <el-header class="header" height="64px">
        <el-col style="width:150px">
          <div class="image-logo">
            <el-image :src="'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'"></el-image>
          </div>
        </el-col>
        <el-col  style="height:100%; background-color:#fff; width:220px; margin-left:100px;">
          <p class="user-name">Stos Aristov</p>
          <el-avatar  shape="square" :size="40" :src="squareUrl" class="user-avatar"></el-avatar>
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
          <i class="el-icon-message-solid message-icon"></i>
          <el-input
            type="text"
            prefix-icon="el-icon-search"
            v-model="kb_content"
            placeholder="请输入"
            @keyup.enter.native="getAllKb"
            class="search-bar"
          ></el-input>
      </el-header>
    <el-container>
      <el-aside class="tabbar" width="280px">
              <el-menu
              default-active="2"
              class="el-menu-vertical-demo navbar-menu"
              background-color="#fff"
              text-color="#000"
              active-text-color="#4000e3"
              :popper-append-to-body="false"
              >
                <el-menu-item index="1" @click="navToHome" style="border-radius:16px 16px 0 0;}">
                  <i class="el-icon-menu"></i>
                  <span slot="title">&nbsp;&nbsp;&nbsp;&nbsp;首页</span>
                </el-menu-item>
                <el-menu-item index="2" @click="navToHome">
                  <i class="el-icon-menu"></i>
                  <span slot="title">&nbsp;&nbsp;&nbsp;&nbsp;活动广场</span>
                </el-menu-item>
                <el-menu-item index="3" @click="navToHome">
                  <i class="el-icon-menu"></i>
                  <span slot="title">&nbsp;&nbsp;&nbsp;&nbsp;活动管理</span>
                </el-menu-item>
                <el-menu-item index="4" @click="navToHome">
                  <i class="el-icon-menu"></i>
                  <span slot="title">&nbsp;&nbsp;&nbsp;&nbsp;消息管理</span>
                </el-menu-item>
                <el-menu-item index="5" @click="navToHome" style="border-radius:0 0 16px 16px;">
                  <i class="el-icon-menu"></i>
                  <span slot="title">&nbsp;&nbsp;&nbsp;&nbsp;地图</span>
                </el-menu-item>
              </el-menu>
        <el-row class="createA">
            <p class="text-CA">Create Activity</p>
            <div class="image-CA">
              <el-image :src="'/static/plus.png'" style="position:relative; bottom:4px; left:1px;"></el-image>
            </div>
        </el-row>
        <el-row class="image-footer">
          <el-image :src="'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'"></el-image>
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

<style type="text/css">
  .active{
    background-color: #000;
  }

  .html, .body{
    margin: 0;
    padding: 0;
  }

  .image-logo{
    width: 80px;
    margin-top: 5px;
    margin-left: 25px;
  }

  .user-name{
    float: left;
    padding:10px 10px;
    text-align: center;
    justify-content: center;
    /* white-space:nowrap; */
    margin-left: 30px;
    font-weight: 700;
    font-size: 15px;
  }

  .user-avatar{
    margin-top: 15px;
    margin-left: 10px;
  }

  .user-more{
    float: right;
    margin-top: 26px;
    margin-left: 13px;
  }

  .message-icon{
    float: right;
    margin-top: 28px;
    margin-right: 180px;
  }

  .search-bar{
    float: right;
    width: 120px;
    margin-top: 15px;
    margin-right: 25px;
  }

  .navbar-menu{
    width: 180px;
    font-weight: 700;
    margin-top: 50px;
    margin-left: 50px;
    border: 2px solid #333333;
    border-radius: 16px;
  }

  .createA{
    font-weight: 700;
    width: 180px;
    height: 70px;
    border: 2px solid #333333;
    border-radius: 16px;
    margin-top: 50px;
    margin-left: 50px;
  }

  .text-CA{
    float: left;
    width: 40%;
    margin-left: 8%;
    margin-right: 2%;
    position: relative;
    bottom: 4px;
  }

  .image-CA{
    float: left;
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
    margin-top: 45px;
    margin-left: 65px;
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
