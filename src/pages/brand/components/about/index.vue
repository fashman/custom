<template>
  <div class="about" id="contact">
    <div :class="[{unfold: isUnfold}, 'about-woqu']">
      <p class="about-woqu-title">关于我趣旅行</p>
      <p>“适合你的定制游，不必太贵，不用操心”是我趣旅行的品牌承诺。</p>
      <p> 作为国内首创“双定制师”服务的定制旅行服务商，我趣旅行的国内定制师将更细致的了解您的出行需求，国外定制师将发挥他们旅居海外、更了解目的地的优势为您挖掘更地道的旅行体验，以此打造适合您的旅行。</p>
      <p> 我趣依托十多年海外运营经验建立起的供应链体系，为您灵活组合自驾、当地参团、门票、包车、司导、租车、酒店、机票等旅行要素，让定制旅行不超预算、价格透明。</p>
      <p>我们致力于用经验和专业为您打造意想不到的海外定制旅行体验。</p>
      <span class="arrows" @click="setUnfold"></span>
    </div>
    <div class="about-hotLine">
      <p class="about-hotLine-title">7x24小时 定制热线</p>
      <div class="about-phone">
        <p>
          <a href="tel:400-661-5757">
            <span class="territory">中国当地</span>
            <span>|</span>
            <span class="number">400-661-5757</span>
            <img src="./images/arrows.png" alt="">
          </a>
        </p>
        <p>
          <a href="tel:1-408-786-0688">
            <span class="territory">美国当地</span>
            <span>|</span>
            <span class="number">1-408-786-0688</span>
            <img src="./images/arrows.png" alt="">
          </a>
        </p>
        <p>
          <a href="tel:0-800-098-8488">
            <span class="territory">英国当地</span>
            <span>|</span>
            <span class="number">0-800-098-8488</span>
            <img src="./images/arrows.png" alt="">
          </a>
        </p> 
        <p>
          <a href="tel:86-755-3667-7780">
            <span class="territory">国际通用</span>
            <span>|</span>
            <span class="number">86-755-3667-7780</span>
            <img src="./images/arrows.png" alt="">
          </a>
        </p>
      </div>
      <div class="about-Qrcode">
        <div class="about-Qrcode-img">
          <img src="./images/Qrcode.png" alt="">
        </div>
        <div class="about-Qrcode-info">
          <p class="title">我趣定制</p>
          <p>扫码关注微信公众号</p>
          <p class="text">世界太大，我帮你挑</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      isUnfold: false
    }
  },
  methods: {
    setUnfold() {
      this.isUnfold = !this.isUnfold
    }
  }
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>