<template>
  <div class="banner">
    <div class="img">
      <img class="logo" src="@/images/index/logo.png" alt="" />
      <img src="@/images/index/slogen.png" alt="" class="slogen">
      <span><User /></span>
    </div>
    <mt-swipe :auto="5000">
      <mt-swipe-item v-for="(item, index) in pic" :key="index">
        <a :href="item.url" v-if="item.url">
          <img :src="item.image || '//h5.quimg.com/h5-custom-static/dist/images/common/scence.jpg'" />
        </a>
        <img v-else :src="item.image || '//h5.quimg.com/h5-custom-static/dist/images/common/scence.jpg'" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';
import Vue from 'vue';
import { mapState, mapMutations, mapActions } from 'vuex';
import User from '@/components/user';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

export default {
  name: 'Banner',
  props: ['pic'],
  components: { User }
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>