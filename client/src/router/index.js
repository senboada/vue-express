import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "TaskIndex",
    component: () =>
      import(
        /* webpackChunkName: "TaskIndex" */ "../components/TaskComponent/TaskIndex.vue"
      ),
  },
  {
    path: "/create-task",
    name: "TaskCreate",
    component: () =>
      import(
        /* webpackChunkName: "TaskCreate" */ "../components/TaskComponent/TaskCreate.vue"
      ),
  },
  {
    path: "/edit-task/:id",
    name: "TaskEdit",
    component: () =>
      import(
        /* webpackChunkName: "TaskEdit" */ "../components/TaskComponent/TaskEdit.vue"
      ),
  },
  {
    path: "/show-task",
    name: "TaskShow",
    component: () =>
      import(
        /* webpackChunkName: "TaskShow" */ "../components/TaskComponent/TaskShow.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
