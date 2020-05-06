import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      tab: {
        type: "TOP",
        name: "首页"
      }
    }
  },
  {
    path: "/class",
    name: "class",
    component: () =>
      import(/* webpackChunkName: "class" */ "../views/class/index.vue"),
    meta: {
      tab: {
        type: "TOP",
        name: "班级"
      }
    }
  },
  {
    path: "/class/:id",
    name: "classDetail",
    component: () =>
      import(/* webpackChunkName: "classDetail" */ "../views/class/id.vue"),
    meta: {
      tab: {
        type: "NORMAL",
        name: "班级详情"
      }
    }
  },
  {
    path: "/course",
    name: "course",
    component: () =>
      import(/* webpackChunkName: "course" */ "../views/course/index.vue"),
    meta: {
      tab: {
        type: "TOP",
        name: "课程"
      }
    }
  },
  {
    path: "/course/:id",
    name: "courseDetail",
    component: () =>
      import(/* webpackChunkName: "courseDetail" */ "../views/course/id.vue"),
    meta: {
      tab: {
        type: "NORMAL",
        name: "课程详情"
      }
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
