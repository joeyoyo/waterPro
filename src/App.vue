<template>
  <div id="app">
    <router-view></router-view>
    <!--<img src="./assets/logo.png" />-->
    <!--<div>-->
      <!--<p>-->
        <!--If Element is successfully added to this project, you'll see an-->
        <!--<code v-text="'<el-button>'"></code>-->
        <!--below-->
      <!--</p>-->
      <!--<el-button>el-button</el-button>-->
      <!--<el-radio v-model="radio" label="1">备选项</el-radio>-->
      <!--<el-radio v-model="radio" label="2">备选项</el-radio>-->
    <!--</div>-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App" />-->
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  // components: {
  //   HelloWorld
  // }
};
</script>

<style lang="scss">
  /*@import "element-variables.scss";*/
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 14px;
}
</style>
