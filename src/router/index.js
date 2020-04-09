import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Home from "../views/test/Home.vue";
import control from "../views/test/control.vue";
import time from "../views/test/time.vue";


// import test from './test/test.js'


Vue.use(VueRouter);

// const routes = [
// //   {
// //     path: "/",
// //     name: "Home",
// //     component: Home
// //   },
// //   {
// //     path: "/about",
// //     name: "About",
// //     // route level code-splitting
// //     // this generates a separate chunk (about.[hash].js) for this route
// //     // which is lazy-loaded when the route is visited.
// //     component: () =>
// //       import(/* webpackChunkName: "about" */ "../views/About.vue")
// //   }
// // ];
const routes = [
  {
    path: '/',
    component: Home,
    name: '导航一',
    iconCls: 'el-icon-message',//图标样式class
    children: [
      { path: '/control', component: control, name: '抄表' },
      { path: '/time', component: time, name: '阀门控制' }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
