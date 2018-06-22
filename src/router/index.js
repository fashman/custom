import Vue from 'vue';
import Router from 'vue-router';

const Index = () => import('@/pages/index');
const List = () => import('@/pages/list');
const DetailAbout = () => import('@/pages/detail/about');
const DetailInfo = () => import('@/pages/detail/info');
const Intention = () => import('@/pages/intention');
const Search = () => import('@/pages/search');
const Brand = () => import('@/pages/brand');

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    // 首页
    {
      path: '/home/index',
      name: 'index',
      component: Index
    },
    // 列表页
    {
      path: '/custom/list',
      name: 'list',
      component: List
    },
    // 列表页（包含参数）
    {
      path: '/custom/list/:options',
      name: 'list2',
      component: List
    },
    // 详情页
    {
      path: '/custom/detail/about/:id',
      name: 'detail',
      component: DetailAbout,
    },
    // 详情页
    {
      path: '/custom/detail/info/:id',
      name: 'info',
      component: DetailInfo
    },
    // 意向单填写页
    {
      path: '/custom/intention',
      name: 'intention',
      component: Intention
    },
    // 搜索页
    {
      path: '/custom/search',
      name: 'search',
      component: Search
    },
    {
      path: '/custom/brand',
      name: 'brand',
      component: Brand
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});
