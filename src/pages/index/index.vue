<template>
  <div class="home" ref="home">
    <Banner :pic="index ? index.index_pic : []"/>
    <Continent />
    <Product :list-hs="index ? index.index_product : []" :list-yl="index ? index.index_product2 : []"/>
    <Customers />
    <Gocustom />
    <Loading :loading="loading"/>
    <Error :error="errorModal.show" :text="errorModal.text" :callback="changeState"/>
    <wechat :wechat="wechatModal" :callback="changeState"/>
    <SideBar />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import Loading from '@/components/loading';
import Error from '@/components/error';
import SideBar from '@/components/sidebar';
import Customers from './components/customers';
import Product from './components/product';
import Continent from './components/continent';
import Banner from './components/banner';
import Gocustom from './components/gocustom';
import Wechat from './components/wechat';

export default {
  name: 'HomePage',
  components: { 
    Customers, 
    Product,
    Continent,
    Banner,
    Gocustom,
    Loading,
    Error,
    Wechat,
    SideBar
  },
  computed: {
    ...mapState('index', {
      index: state => state.index,
      loading: state => state.loading,
      errorModal: state => state.errorModal,
      wechatModal: state => state.wechatModal
    })
  },
  methods: {
    ...mapActions('index', {
      getIndexInfo: 'getIndex'
    }),
    ...mapMutations('index', {
      changeState: 'CHANGE_STATE'
    })
  },
  mounted() {
    this.getIndexInfo();
  }
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>