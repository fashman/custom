<template>
  <div class="header">
    <div class="header-box">
      <a href="//m.woqu.com">
        <img class="logo" src="@/images/index/logo.png" alt="" />
      </a>
      <a href="//m.woqu.com">
        <img src="@/images/index/slogen.png" alt="" class="slogen">
      </a>
      <div class="search-btn" @click="goToSearchPage"></div>
      <div :class="{'search-box': true, show: showSearch}">
        <span @click="goToSearchPage">{{ keyword || '你想去哪里？' }}</span>
      </div>
      <div class="user-icon" @click="show"></div>
    </div>
    <div class="user-box" v-show="isShow" ref="userRef">
      <div :class="{ info: true, show: isShow, hide: hideClass}">
        <div class="yours" v-if="userInfo">
          <h3>Hi，{{ userInfo }}</h3>
          <p><a href="//m.woqu.com/order-list-app">我的订单</a></p>
          <p><span @click="reloadUrl('//m.woqu.com/member/logout')">退出</span></p>
        </div>
        <div class="yours" v-else>
          <h3>
            <span @click="reloadUrl('//m.woqu.com/account/password-login')">点击登录</span>
          </h3>
          <p>
            <a href="//m.woqu.com/order-list-app">我的订单</a>
          </p>
          <p>
            <span @click="reloadUrl('//m.woqu.com/account/dynamic-login')">注册</span>
          </p>
        </div>
        <div class="line"></div>
        <div class="links">
          <p>
            <i class="home"></i>
            <a href="/home/index">首页</a>
          </p>
          <p>
            <i class="line"></i>
            <a href="/custom/list">分类线路</a>
          </p>
          <p>
            <i class="custom"></i>
            <a href="/custom/intention">一对一定制</a>
          </p>
        </div>
      </div>
      <div class="cover" @click="hide"></div>
    </div>
  </div>
</template>

<script>
import { checkLogin } from '@/api';
import utils from '@/utils/utils';

export default {
  name: 'Header',
  data() {
    return {
      isShow: false,
      hideClass: false,
      userInfo: null,
      showSearch: false,
      keyword: ''
    }
  },
  created() {
    checkLogin().then(res => {
      if ( res.rs === 1){
        this.userInfo = res.data;
      }
    });
    const keyword = this.$route.query.keyword;
    if (keyword) {
      this.keyword = keyword;
      this.showSearch = true;
    }
  },
  methods: {
    show() {
      this.isShow = true;
    },
    hide() {
      this.hideClass = true;
      setTimeout(() => {
        this.isShow = false;
        this.hideClass = false;
      }, 500);
    },
    reloadUrl(url) {
      location.href = `${url}?target=${location.href}`;
    },
    handleScroll() {
      if (!this.keyword) {
        const scrollTop = utils.getScrollTop();
        this.showSearch = scrollTop > 10 ? true : false;
      }
    },
    goToSearchPage() {
      // location.href = '/custom/search';
      this.$router.push('/custom/search');
    }
  },
  mounted() {
    this.$refs.userRef.addEventListener('touchmove', (e) => {
      e.preventDefault();
    });
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestory() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>