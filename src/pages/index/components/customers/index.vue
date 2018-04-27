<template>
  <div class="section">
    <div class="s-tit">
      <h3>我们的<span>专业定制师</span></h3>
    </div>
    <div class="s-content">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">北美</mt-tab-item>
        <mt-tab-item id="2">澳新</mt-tab-item>
        <mt-tab-item id="3">欧洲</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <ul>
            <li v-for="(item, index) in customers.na" :key="index">
              <div class="img">
                <img :src="item.img" />
              </div>
              <div class="text showmore">
                <div class="tit">
                  <h3>{{ item.nameCn }} {{ item.nameEn }}</h3>
                  <span class="contact" @click="handleShowWechat(item)">
                    <font>联系TA</font>
                  </span>
                </div>
                <div>
                  <p>从业经历：{{ item.customer }}</p>
                  <p>旅行过：{{ item.travel }}</p>
                </div>
              </div>
            </li>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <ul>
            <li v-for="(item, index) in customers.au" :key="index">
              <div class="img">
                <img :src="item.img" />
              </div>
              <div class="text showmore">
                <div class="tit">
                  <h3>{{ item.nameCn }} {{ item.nameEn }}</h3>
                  <span class="contact" @click="handleShowWechat(item)">
                    <font>联系TA</font>
                  </span>
                </div>
                <div>
                  <p>从业经历：{{ item.customer }}</p>
                  <p>旅行过：{{ item.travel }}</p>
                </div>
              </div>
            </li>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <ul>
            <li v-for="(item, index) in customers.eu" :key="index">
              <div class="img">
                <img :src="item.img" />
              </div>
              <div class="text showmore">
                <div class="tit">
                  <h3>{{ item.nameCn }} {{ item.nameEn }}</h3>
                  <span class="contact" @click="handleShowWechat(item)">
                    <font>联系TA</font>
                  </span>
                </div>
                <div>
                  <p>从业经历：{{ item.customer }}</p>
                  <p>旅行过：{{ item.travel }}</p>
                </div>
              </div>
            </li>
          </ul>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
import { Navbar, TabItem, TabContainer, TabContainerItem } from 'mint-ui';
import Vue from 'vue';
import { mapState, mapMutations, mapActions } from 'vuex';

Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);

export default {
  name: 'Customer',
  data () {
    return {
      selected: '1',
    }
  },
  computed: {
    ...mapState('index', {
      customers: state => state.customers,
    })
  },
  methods: {
    ...mapMutations('index', {
      changeState: 'CHANGE_STATE'
    }),
    handleShowWechat(data) {
      this.changeState({
        key: 'wechatModal',
        value: { show: true, data }
      });
    }
  }
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>
