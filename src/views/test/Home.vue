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
      <el-aside :class="collapsed?'menu-collapsed':'menu-expanded'">
        <el-menu :default-active="$route.path"  unique-opened router v-show="!collapsed">
          <div v-for="(item,index) in $router.options.routes" :key="index">
            <el-submenu>
              <template slot="title" class="nav-title"><i class="el-icon-message nav-icon"></i>{{item.name}}</template>
              <el-menu-item-group>
                <el-menu-item class="nav-content" v-for="child in item.children" :index="child.path" :key="child.path"><i class="el-icon-star-on nav-icon-sub"></i>{{child.name}}</el-menu-item>
                <!--<el-menu-item index="1-1" class="nav-content" > <i class="el-icon-star-on nav-icon-sub"></i>抄表 </el-menu-item>-->
                <!--<el-menu-item index="1-2" class="nav-content"> <i class="el-icon-star-on nav-icon-sub"></i>阀门控制</el-menu-item>-->
              </el-menu-item-group>
            </el-submenu>
          </div>
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
      <el-main class="main">
        <router-view></router-view>



      </el-main>
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
  },
  data() {
    return {
      sysName:'VUEADMIN',
      collapsed:false,
      sysUserName: '',
      sysUserAvatar: '',
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }

    }
  },
  methods: {
    //折叠导航栏
    collapse:function(){
      this.collapsed=!this.collapsed;
    },
    showMenu(i,status){
      this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-'+i)[0].style.display=status?'block':'none';
    },
    // toggleSelection(rows) {
    //   if (rows) {
    //     rows.forEach(row => {
    //       this.$refs.multipleTable.toggleRowSelection(row);
    //     });
    //   } else {
    //     this.$refs.multipleTable.clearSelection();
    //   }
    // },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(val)
    }
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
    /*.el-submenu__title:hover, .el-submenu__title:focus {*/
      /*background:rgba(94,160,212,0.2);*/
      /*color: #ffffff;*/
    /*}*/
    /*.el-menu-item:hover, .el-menu-item:focus {*/
      /*background:rgba(94,160,212,0.2);*/
      /*color: #ffffff ;*/
    /*}*/

    .el-menu-item-group {
      border: none;
      background-color: #243759 !important;
    }
  }

  .main {
    background-color: #F5F7FC;
    padding: 20px 0 0 20px !important;
    .main-section{
      box-shadow:0px 2px 2px 0px rgba(4,4,4,0.09);
      height: 100%;
      background: #fff;
      margin: 0;
      .main-breadcrumb{
        width: 100%;
        height: 40px;
        line-height: 40px;
        padding-left: 20px;
        border-bottom: 1px solid #CECECE;
      }
      .toolbar{
        padding: 20px 0 0 20px;
        text-align: left;
        .mian-txt{
          margin: 0 10px;
        }
        .main-btn-primary,.main-btn-excel{
          background:#EFF0F0;
          border:1px solid #DDDDDD;
          border-radius:3px;
          color: #323232;
        }
        .main-btn-find{
          background:#4790D0;
          border:1px solid #4B82DE;
          border-radius:3px;
          color: #ffffff;
        }
        .main-btn-excel:hover, .main-btn-excel:focus{
          background:#EFF0F0;
          border:1px solid #DDDDDD;
          border-radius:3px;
          color:#323232;
        }
        .main-btn-primary:hover,.main-btn-primary:focus{
          background:#43D7AE;
          color: #FFFFFF;
          border-radius:3px;

        }
        
        .main-user .el-form-item__content{
          display: flex;
          .mian-user-input{
            width:143px;
            height:35px;
          }
        }
        .main-time{
          display: flex;
          .block .el-input__inner{
            /*width:200px;*/
            /*height:35px;*/
            /*border:1px solid rgba(227, 227, 227, 1);*/
            /*border-radius:2px;*/

          }


        }
      }

    }
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
