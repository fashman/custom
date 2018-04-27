<template>
  <div class="reservation">
    <div class="price">
      ¥<span>{{ detailInfo && detailInfo.startPrice ? detailInfo.startPrice : '--'}}</span>起/人
      <img v-if="detailInfo && detailInfo.product.reconfirm" src="./images/reconfirm.png" alt="">
    </div>
    <a :href="computedHref" class="order">立即预订</a>
    <div class="sellout" v-if="detailInfo && detailInfo.sellOut">已售罄</div>
    <div class="sellout" v-if="detailInfo && detailInfo.state !== 1">未上架</div>
  </div>
</template>

<script>
export default {
  name: 'Reservation',
  computed: {
    computedHref() {
      return this.detailInfo ? `//m.woqu.com/custom/travelInfo/${this.detailInfo.product.productCode}` : 'javascript:void(0)'
    }
  },
  props: ['detailInfo']
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>
