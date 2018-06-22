<template>
  <div class="continent">
    <div class="text">
      <a href="/custom/brand">
         <img src="./images/text.jpg" alt="">
      </a>
    </div>
    <div class="list">
      <a href="/custom/list/ct-POI_30096">
        <img src="./images/na.jpg" alt="">
      </a>
      <a href="/custom/list/ct-POI_30098">
        <img src="./images/anz.jpg" alt="">
      </a>
      <a href="/custom/list/ct-POI_30097">
        <img src="./images/eu.jpg" alt="">
      </a>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  name: 'Continent',
  computed: {
    ...mapState('index', {
      customers: state => state.customers,
    })
  }
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>