// 引入vue-router对象
import { createRouter, createWebHashHistory, Router} from "vue-router";
// 插件 vite-plugin-pages 的使用配置
 // @ts-ignore 
import routes from "~pages";

/**
 * 定义路由数组
 */
// const routes = [
//   // {
//   //   // 404路由
//   //   path: "/404",
//   //   name: "404",
//   //   component: () => import("/@/views/404.vue")
//   // }

//   {
//     path: "/",
//     name: "index",
//     component: () => import("@/App.vue")
//   },

//   {
//     path: "/test",
//     name: "test",
//     component: () => import("@/views/test/test.vue")
//   },
//   {
//     path: "/tree-test",
//     name: "tree-test",
//     component: () => import("@/views/test/tree-test.vue")
//   }
// ];

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes // `routes: routes` 的缩写
});

/**
 * 输出对象
 */
export default router;
