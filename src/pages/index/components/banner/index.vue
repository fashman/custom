<template>
  <div class="banner">
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

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

export default {
  name: 'Banner',
  props: ['pic']
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>