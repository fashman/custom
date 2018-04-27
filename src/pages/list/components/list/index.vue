<template>
  <ul class="list">
    <li v-for="(item, index) in listData" :key="index">
      <a :href="'/custom/detail/about/' + item.productKey">
        <div class="img">
          <img v-lazy="item.image || '//h5.quimg.com/h5-custom-static/dist/images/common/scence.jpg'" alt="">
          <div class="code">
            <span>编号：{{item.productKey}}</span>
          </div>
        </div>
        <div class="tit" 
          v-html="'<span>'+item.duration+'天'+(item.duration - 1)+'夜</span>' + item.title"
        ></div>
        <div class="tags" v-if="item.tags && item.tags.length">
          <span v-for="(a, b) in item.tags" :key="b">{{a.nameCN}}</span>
        </div>
        <p>¥<span>{{Math.round( item.price)}}</span>/人起</p>
      </a> 
    </li>
    <p v-if="loading" class="nomore">———— 数据加载中... ————</p>
    <p v-if="!hasMore" class="nomore">———— 没有更多数据了 ————</p>
  </ul>
</template>

<script>
import Vue from 'vue';
import { mapActions } from 'vuex';
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  loading: '//h5.quimg.com/h5-custom-static/dist/images/common/loading500x300.jpg',
})

export default {
  name: 'Products',
  props: ['listData', 'hasMore', 'loading']
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>