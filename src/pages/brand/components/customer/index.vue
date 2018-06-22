<template>
  <div class="custom" ref="customer">
    <div class="custom-intro">
      <h3 class="main-title">国内+海外双定制师 贴心服务</h3>
      <div class="custom-intro-icon">
        <div class="custom-intro-item inland-custom">
          <p class="custom-intro-item-p1">国内定制师</p>
          <p class="custom-intro-item-p2">
            <img class="domestic-character" src="@/images/brand/character_03.png" alt="">
          </p>
          <p class="custom-intro-item-p3">深入了解您的需求</p>
        </div>
        <div class="custom-intro-item overseas-custom">
          <p class="custom-intro-item-p1">海外定制师</p>
          <p class="custom-intro-item-p2">
            <img class="overseas-character" src="@/images/brand/character_05.png" alt="">
          </p>
          <p class="custom-intro-item-p3">给您推荐更地道玩法</p>
        </div>
      </div>
    </div>
    <div class="custom-master">
      <h3 class="main-title">金牌定制师</h3>
      <div class="customer">
        <div class="customer-item" v-for="(item, index) in customerInfo" :key="index">
          <div class="customer-info">
            <div class="customer-info-img">
              <img 
                :src="item.image" 
                alt="" 
                 @click="callback({
                    key: 'wechatModal',
                    value: {
                      data : {
                        wechat: item.weixinImage,
                        wx: item.weixinNum
                      },
                      show: true
                    }
                  })"
              >
              <span></span>
            </div>
            <div class="customer-info-content">
              <p 
                class="customer-name"
                 @click="callback({
                    key: 'wechatModal',
                    value: {
                      data : {
                        wechat: item.weixinImage,
                        wx: item.weixinNum
                      },
                      show: true
                    }
                  })"
              >
                {{item.nickName}}
              </p>
              <p class="customer-detail">
                <span>从业{{item.workingYears}}年</span>
                <span>住{{item.address}}</span>
                <span>为{{item.personNum}}+用户服务过</span>
              </p>
              <div class="customer-tag">
                <span v-for="(tag, idx) in item.labels" :key="idx">{{tag}}</span>
              </div>
              <div class="customer-link">
                <span
                  class="addWechat"
                  @click="callback({
                    key: 'wechatModal',
                    value: {
                      data : {
                        wechat: item.weixinImage,
                        wx: item.weixinNum
                      },
                      show: true
                    }
                  })"
                >
                  加{{item.sex === '女' ? '她' : '他' }}微信
                </span>
                <span 
                  class="invitation" 
                  @click="customInvit(item)"
                >
                  邀请{{item.sex === '女' ? '她' : '他' }}定制
                </span>
              </div>
            </div>
          </div>
          <div class="supernatant"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Customer',
  data() {
    return {
    }
  },
  props: ['callback', 'customerInfo', 'setSideBar'],
  methods: {
    customInvit(item) {
      document.body.classList.add('flexdIos');
      this.callback({
        key: 'inviteModal',
        value: {
          show: true,
          data: {
            name: item.nickName,
            id: item.id,
            email: item.email
          }
        }
      });
      this.setSideBar(false)
    }
  }
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>