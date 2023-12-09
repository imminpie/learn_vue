import { createWebHistory, createRouter } from 'vue-router';
import Home from './components/HomePage.vue';
import List from './components/ListItem.vue';
import Detail from './components/DetailItem.vue';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/list',
    component: List,
  },
  {
    path: '/detail/:id',
    component: Detail,
  },
  {
    path: '/:anything(.*)',
    component: <p>Not Found...😔</p>,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
