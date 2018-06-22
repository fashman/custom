<template>
  <div class="banner">
    <div class="banner-box">
      <mt-swipe :auto="4000" :showIndicators="false" @change="handleChange">
        <mt-swipe-item v-for="(item, index) in detailInfo && detailInfo.photos && detailInfo.photos.length ? detailInfo.photos : [1]" :key="index">
          <img :src="item.photo" />
          <span class="cover"></span>
        </mt-swipe-item>
      </mt-swipe>
      <div class="indicator"><span>{{ index }}</span> / {{ detailInfo && detailInfo.photos && detailInfo.photos.length ? detailInfo.photos.length : 1 }}</div>
      <div class="travel">
        <h3>
          {{detailInfo ? detailInfo.product.duration : '--'}}天{{detailInfo ? (detailInfo.product.duration - 1) : '--'}}夜
        </h3>
        <p>
          开始城市 :
          <span v-for="startItem in (detailInfo ? detailInfo.product.startLocation : [])" :key="'s' + startItem.id">
            {{ startItem.cnName }}
          </span>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          结束城市 :
          <span v-for="endItem in (detailInfo ? detailInfo.product.endLocation : [])" :key="'e' + endItem.id">
            {{ endItem.cnName }}
          </span>
        </p>
        <span class="type">{{ customType[detailInfo ? detailInfo.product.productSubChildType : 0] }}</span>
        <span class="code">ID：{{ detailInfo ? detailInfo.product.productCode : 'WX2018321'}}</span>
      </div>
    </div>
    <h2>{{ detailInfo && detailInfo.translation ? detailInfo.translation.title : '这是个未知标题' }}</h2>
    <div class="tags" v-if="tags.length">
      <span :class="{hasmore: item.descCN}" @click="showTagsInfo(item)" v-for="(item, index) in tags" :key="index">
        {{item.cnName || item.nameCN}}
        <i></i>
      </span>
    </div>
    <p class="line"></p>
    <div class="text">
      <h3>为什么你会喜欢这份定制</h3>
      <div v-html="detailInfo && detailInfo.translation ? detailInfo.translation.recommendation : '<p>没有理由就是喜欢她！</p>'">
      </div>
    </div>
    <div class="tag-info" v-show="show" @click="closeTagsInfo">
      <div class="inbox">
        <h3>什么是“{{tagInfo.nameCN}}”?</h3>
        <p>{{tagInfo.descCN || '暂无详细描述信息'}}</p>
        <span @click="closeTagsInfo">关闭</span>
      </div>
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';
import Vue from 'vue';
import { mapState, mapMutations, mapActions } from 'vuex';
import utils from '@/utils/utils';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

export default {
  name: 'Banner',
  data () {
    return {
      index: 1,
      show: false,
      tagInfo: {},
      customType: utils.customType
    }
  },
  computed: {
    tags() {
      const detail = this.detailInfo;
      return detail && detail.translation ? detail.translation.tags || [] : [];
    }
  },
  props: ['detailInfo'],
  methods: {
    handleChange(i) {
      this.index = i + 1;
    },
    showTagsInfo( tag ) {
      if( tag.descCN ) {
        this.show = true;
        this.tagInfo = tag;
      }
    },
    closeTagsInfo() {
      this.show = false;
    }
  }
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>