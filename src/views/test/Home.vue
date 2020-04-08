<template>
  <el-container>
    <el-header>
      <div class="header-left">LoRa水表抄表演示系统</div>
      <div class="header-right">
        <el-dropdown>
          <i class="el-icon-setting">&nbsp;&nbsp;系统设置</i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>我的消息</el-dropdown-item>
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <div class="info">
          <div class="info-img"><img src="../../assets/login/people.png" /></div>
          <span class="info-name">王小虎</span>
        </div>
        
      </div>

    </el-header>
    <el-container>
      <el-aside>
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title" class="nav-title"><i class="el-icon-message nav-icon"></i>测试功能</template>
            <el-menu-item-group>
              <el-menu-item index="1-1" class="nav-content"> <i class="el-icon-star-on nav-icon-sub"></i>抄表 </el-menu-item>
              <el-menu-item index="1-2" class="nav-content"> <i class="el-icon-star-on nav-icon-sub"></i>阀门控制</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu nav-icon"></i>测试功能</template>
            <el-menu-item-group>
              <el-menu-item index="2-1"  class="nav-content"> <i class="el-icon-star-on nav-icon-sub"></i>选项1</el-menu-item>
              <el-menu-item index="2-2"  class="nav-content"> <i class="el-icon-star-on nav-icon-sub"></i>选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting nav-icon"></i>测功能</template>
            <el-menu-item-group>
              <el-menu-item index="3-1"  class="nav-content"> <i class="el-icon-star-on nav-icon-sub"></i>选项1</el-menu-item>
              <el-menu-item index="3-2"  class="nav-content"> <i class="el-icon-star-on nav-icon-sub"></i>选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld
  }
};
</script>

<style lang="scss" >
  /*@import "../../element-variables.scss";*/
  .el-header {
    height: 65px !important;
    background-color: #4296D2;
    color: #ffffff;
    text-align: center;
    line-height: 65px;
    display: flex;
    justify-content: space-between;
    .header-left{
      font-size: 24px;
      font-weight:bold;
    }
    .header-right{
      display: flex;
      .el-dropdown{
        margin-right: 50px;
        font-size: 16px;
        color: #ffffff;
        .el-icon-setting[data-v-269eec9c]:before {
          font-size: 18px;
        }
      }
      .info{
        display: flex;
        align-items: center;
        position: relative;
        &:before{
          content: '';
          width: 1px;
          background: #ffffff;
          display: inline-block;
          position: absolute;
          top: 23px;
          bottom: 23px;
          left: -21px;
          opacity:0.3;
        }
        .info-img{
          width: 30px;
          height: 30px;
          border-radius: 50%;
          overflow: hidden;
          background: #fff;
          margin-right: 10px;
          line-height: 30px;
          img{
            width: 30px;
            height: 30px;
          }
        }
      }
    }
  }

  .el-aside {
    width:229px !important;
    background:rgba(36,55,89,1);
    border:1px solid rgba(217, 218, 223, 0.51);
    box-shadow:0px 2px 2px 0px rgba(4,4,4,0.09);
    text-align: left;
    .el-menu {
      border-right: none !important;
      background-color: unset;
      .el-submenu__title{
        color: #B2DAFF;
        font-size: 16px;
      }
      .nav-icon{
        color:#63ABDD;
        font-size: 20px;
      }
      .nav-icon-sub{
        color:#63ABDD;
        font-size: 16px;
      }
      .nav-content{
        color: #F2F2F2;
        font-size: 14px;
      }
    }
    .el-submenu__title:hover, .el-submenu__title:focus {
      background:rgba(94,160,212,0.2);
      color: #ffffff;
    }
    .el-menu-item:hover, .el-menu-item:focus {
      background:rgba(94,160,212,0.2);
      color: #ffffff ;
    }

    .el-menu-item-group {
      border: none;
      background-color: #243759 !important;
    }
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  /*body > .el-container {*/
    /*margin-bottom: 40px;*/
  /*}*/

  /*.el-container:nth-child(5) .el-aside,*/
  /*.el-container:nth-child(6) .el-aside {*/
    /*line-height: 260px;*/
  /*}*/

  /*.el-container:nth-child(7) .el-aside {*/
    /*line-height: 320px;*/
  /*}*/
</style>
