import Vue from 'vue';
import Router from 'vue-router';

// 页面懒加载 (https://router.vuejs.org/zh-cn/advanced/lazy-loading.html)
const Index = () => import('@/pages/index');
const List = () => import('@/pages/list');
const DetailAbout = () => import('@/pages/detail/about');
// import DetailAbout from '@/pages/detail/about';
const DetailInfo = () => import('@/pages/detail/info');
// import DetailInfo from '@/pages/detail/info';
const Intention = () => import('@/pages/intention');

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home/index',
      name: 'index',
      component: Index
    },
    {
      path: '/custom/list',
      name: 'list',
      component: List
    },
    {
      path: '/custom/list/:options',
      name: 'list2',
      component: List
    },
    {
      path: '/custom/detail/about/:id',
      name: 'detail',
      component: DetailAbout,
    },
    {
      path: '/custom/detail/info/:id', 
      name: 'info',
      component: DetailInfo
    },
    {
      path: '/custom/intention',
      name: 'intention',
      component: Intention
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});
