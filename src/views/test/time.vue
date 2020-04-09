<template>

                <section class="main-section">
                    <!--面包屑-->
                    <el-breadcrumb separator-class="el-icon-arrow-right" class="main-breadcrumb">
                        <el-breadcrumb-item :to="{ path: '/' }"><i class="el-icon-menu"></i>首页</el-breadcrumb-item>
                        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                    </el-breadcrumb>
                    <!--工具条-->
                    <el-col  class="toolbar" style="padding-bottom: 0px;">
                        <el-form :inline="true" :model="filters">
                            <el-form-item>
                                <el-button class="main-btn-primary">单抄</el-button>
                                <el-button class="main-btn-primary">全抄</el-button>
                                <el-button class="main-btn-primary">定时抄</el-button>
                            </el-form-item>
                            <el-form-item class="main-user">
                                <span class="mian-txt">用户名称</span>
                                <el-input v-model="filters.name" placeholder="用户名称" class="mian-user-input"></el-input>
                            </el-form-item>
                            <el-form-item >
                                <div class="main-time">
                                    <span class="mian-txt">实时时间</span>
                                    <div class="block">
                                        <el-date-picker
                                                v-model="value1"
                                                type="datetime"
                                                placeholder="选择日期时间"
                                                align="right"
                                                :picker-options="pickerOptions">
                                        </el-date-picker>
                                    </div>
                                    <span class="mian-txt">至</span>
                                    <div class="block">
                                        <el-date-picker
                                                v-model="value2"
                                                type="datetime"
                                                placeholder="选择日期时间"
                                                align="right"
                                                :picker-options="pickerOptions">
                                        </el-date-picker>
                                    </div>
                                </div>
                            </el-form-item>
                            <el-form-item>
                                <el-button class="main-btn-find">搜索</el-button>
                                <el-button class="main-btn-excel">导出</el-button>
                            </el-form-item>
                        </el-form>
                    </el-col>
                    <!--列表-->
                    <el-table
                            ref="multipleTable"
                            :data="tableData"
                            tooltip-effect="dark"
                            style="width: 100%"
                            @selection-change="handleSelectionChange">
                        <el-table-column
                                type="selection"
                                width="55">
                        </el-table-column>
                        <el-table-column
                                label="日期"
                                width="120">
                            <template slot-scope="scope">{{ scope.row.date }}</template>
                        </el-table-column>
                        <el-table-column
                                prop="name"
                                label="姓名"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="地址"
                                show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <el-button
                                        size="mini"
                                        @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                                <el-button
                                        size="mini"
                                        type="danger"
                                        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </section>
</template>

<script>
  // @ is an alias to /src
  // import HelloWorld from "@/components/HelloWorld.vue";

  export default {
    name: "time",
    components: {
      // HelloWorld
    },
    data() {
      return {
        pickerOptions: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
        filters: {
          name: ''
        },
        users: [],
        total: 0,
        page: 1,
        listLoading: false,
        sels: [],//列表选中列
        editFormVisible: false,//编辑界面是否显示
        editLoading: false,
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []

      }
    },
    methods: {
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

</style>
