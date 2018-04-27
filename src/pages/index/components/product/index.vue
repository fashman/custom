<template>
  <div class="products">
    <div class="group" v-if="listHs.length">
      <img src="./images/yellowstone.jpg" alt="">
      <ul class="list">
        <li v-for="(item, index) in listHs" :key="index" v-if="index > 0">
          <!-- <router-link :to="{ name: 'detail', params: { id: item.code }}"> -->
          <a :href="'/custom/detail/about/' + item.code">
            <div class="img">
              <img :src="item.image" alt="">
            </div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.personNum || Math.random().toFixed(2) * 100 }}人已定制</p>
            <div class="tags">
              <span>私人定制</span>
            </div>
            <div class="price">￥<strong>{{ item.price }}</strong>起/人</div>
          <!-- </router-link> -->
          </a>
        </li>
      </ul>
      <a :href="listHs[0].url">
        <img src="./images/more.jpg" alt="" class="more">
      </a>
    </div>
    <div class="group" v-if="listYl.length">
      <img src="./images/british.jpg" alt="">
      <ul class="list">
        <li v-for="(item, index) in listYl" :key="index" v-if="index > 0">
          <!-- <router-link :to="{ name: 'detail', params: { id: item.code }}"> -->
          <a :href="'/custom/detail/about/' + item.code">
            <div class="img">
              <img :src="item.image" alt="">
            </div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.personNum || Math.random().toFixed(2) * 100 }}人已定制</p>
            <div class="tags">
              <span>私人定制</span>
            </div>
            <div class="price">￥<strong>{{ item.price }}</strong>起/人</div>
          </a>
          <!-- </router-link> -->
        </li>
      </ul>
      <a :href="listYl[0].url">
        <img src="./images/more.jpg" alt="" class="more">
      </a>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  name: 'Product',
  props: ['listHs', 'listYl'],
  computed: {
    ...mapState('index', {
      customers: state => state.customers,
    })
  },
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>