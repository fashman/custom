<template>
  <div class="list">
    <a href="/custom/intention" class="banner">
      <img src="./images/banner.png" alt="">
    </a>
    <ul>
      <template v-for="(item, index) in listData">
        <!-- 列表页行程数量≥10，在第9个前面插入一条 -->
        <li class="default" v-if="listData.length >= 10 && index === 8" :key="index + Math.random()">
          <a href="/custom/intention">
            <div class="img">
              <img v-lazy="'//h5.quimg.com/h5-custom-static/dist/images/list/default.png'" alt="">
            </div>
            <div class="tit"><span>一对一定制</span>国内+海外双定制师，十年经验，为你定制专属行程，价格透明又不贵</div>
            <div class="tags">
              <span>一对一服务/随时出发/灵活搭配/价格透明</span>
            </div>
            <p>¥ <span>0</span> 定制费</p>
          </a>
        </li>
        <li :key="index">
          <a :href="'/custom/detail/about/' + item.productKey">
            <div class="img">
              <img v-lazy="item.image || '//h5.quimg.com/h5-custom-static/dist/images/common/scence.jpg'" alt="">
              <div class="code">
                <span>ID:{{ item.productKey }}</span>
              </div>
            </div>
            <div class="tit">
              <span v-if="customType[item.subChildType]">{{ customType[item.subChildType] }}</span>
              {{ item.duration }}天{{ item.duration - 1 }}夜 | {{ item.title }}
            </div>
            <div class="tags" v-if="item.tags && item.tags.length">
              <span v-for="(a, b) in item.tags" :key="b">{{a.cnName || a.nameCN}}<font v-if="b < item.tags.length - 1">/</font></span>
            </div>
            <p>¥ <span>{{ Math.round(item.price) }}</span> /人起</p>
          </a>
        </li>
        <!-- 当1≤列表页行程数量时，在所有行程底部插入一条 -->
        <li v-if="!hasMore && index === listData.length - 1" :key="index + Math.random()">
          <a href="/custom/intention">
            <div class="img">
              <img v-lazy="'//h5.quimg.com/h5-custom-static/dist/images/list/default.png'" alt="">
            </div>
            <div class="tit"><span>一对一定制</span>国内+海外双定制师，十年经验，为你定制专属行程，价格透明又不贵</div>
            <div class="tags">
              <span>一对一服务/随时出发/灵活搭配/价格透明</span>
            </div>
            <p>¥ <span>0</span> 定制费</p>
          </a>
        </li>
      </template>
      <p v-if="loading" class="loadmore">
        <span></span>
        <span></span>
        <span></span>
      </p>
      <p v-if="!hasMore" class="nomore">———— 不要再扯了，这回真没了... ————</p>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapActions } from 'vuex';
import VueLazyload from 'vue-lazyload';
import utils from '@/utils/utils';

Vue.use(VueLazyload, {
  loading: '//h5.quimg.com/h5-custom-static/dist/images/common/loading500x300.jpg',
});

export default {
  data() {
    return {
      customType: utils.customType,
      scrollTop: 0
    }
  },
  name: 'Products',
  props: ['listData', 'hasMore', 'loading'],
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>