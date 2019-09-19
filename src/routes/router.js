import Layout from "@/components/_zh-layout.vue";
import Home from "@/views/Home.vue";
import Find from "@/views/Find.vue";
import Specials from "@/views/Specials.vue";
import Zhuanlan from "@/views/zhuanlan.vue";

export default [
  {
    path: "/",
    name: "Root",
    component: Layout,
    redirect: {
      name: "Home"
    },
    children: [
      {
        path: "/home",
        name: "Home",
        component: Home,
        title: "主页"
      },
      {
        path: "/zhihu/find",
        name: "Find",
        component: Find,
        title: "发现"
      },
      {
        path: "/zhihu/specials",
        name: "Specials",
        component: Specials,
        title: "热榜"
      }
    ]
  },
  {
    path: "/zhihu/zhuanlan",
    name: "Zhuanlan",
    component: Zhuanlan,
    title: "专栏"
  }
];
