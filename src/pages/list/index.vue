<template>
  <div class="list-page">
    <Header />
    <Menu 
      :scroll-down="isScrollDown"
      :change-state="changeState"
      :sort="sort"
      :get-list="getList"
      :facet-fields-select="facetFieldsSelect"
      :facet-fields="facetFields"
      v-if="list.length"
    />
    <Destination 
      :show-destination-modal="showDestinationModal" 
      :facet-fields-fake="facetFieldsFake"
      :facet-fields-select-fake="facetFieldsSelectFake"
      :pre-total="preTotal"
      :preloading="preloading"
      :resert="resert"
      :close-modal="closeModal"
      :get-pre-list="getPreList"
      :clear-destination="clearDestination"
      :submit-search="submitSearch"
    />
    <Filters
      :show-filter-modal="showFilterModal" 
      :facet-fields-fake="facetFieldsFake"
      :facet-fields-select-fake="facetFieldsSelectFake"
      :pre-total="preTotal"
      :preloading="preloading"
      :resert="resert"
      :close-modal="closeModal"
      :get-pre-list="getPreList"
      :submit-search="submitSearch"
    />
    <Theme 
      :show-theme-modal="showThemeModal" 
      :facet-fields-fake="facetFieldsFake"
      :facet-fields-select-fake="facetFieldsSelectFake"
      :pre-total="preTotal"
      :preloading="preloading"
      :resert="resert"
      :close-modal="closeModal"
      :get-pre-list="getPreList"
      :submit-search="submitSearch"
    />
    <None v-if="!list.length && !loading"/>
    <Products 
      v-if="list.length" 
      :list-data="list" 
      :has-more="hasMore"
      :loading="loading"
    />
    <SideBar />
    <Consulting />
    <!-- <Loading :loading="loading"/> -->
    <Error :error="errorModal.show" :text="errorModal.text" :callback="changeState"/>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import Loading from '@/components/loading';
import Header from '@/components/header';
import Error from '@/components/error';
import SideBar from '@/components/sidebar';
import Consulting from '@/components/consulting';
import None from './components/none';
import Destination from './components/destination';
import Filters from './components/filters';
import Theme from './components/theme';
import Products from './components/list';
import utils from '@/utils/utils';
import Menu from './components/menu';

export default {
  name: 'List',
  data() {
    return {
      timer: null,
      hasMore: true,
      scrollTop: 0,
      isScrollDown: false
    }
  },
  components: { 
    Destination, Filters, Theme,
    Products,
    Error, None, Loading,
    SideBar, Menu, Header, Consulting
  },
  computed: {
    ...mapState('list', {
      loading: state => state.loading,
      showDestinationModal: state => state.showDestinationModal,
      list: state => state.list,
      showFilterModal: state => state.showFilterModal,
      showThemeModal: state => state.showThemeModal,
      startFrom: state => state.startFrom,
      total: state => state.total,
      errorModal: state => state.errorModal,
      facetFields: state => state.facetFields,
      facetFieldsFake: state => state.facetFieldsFake,
      facetFieldsSelect: state => state.facetFieldsSelect,
      facetFieldsSelectFake: state => state.facetFieldsSelectFake,
      preTotal: state => state.preTotal,
      preloading: state => state.preloading,
      sort: state => state.sort
    }),
  },
  methods: {
    ...mapMutations('list', {
      changeState: 'CHANGE_STATE',
      getParamsByUrl: 'GET_PARAMSBYURL',
      resert: 'RESERT',
      clearDestination: 'CLEAR_DESTINATION'
    }),
    ...mapActions('list', {
      getList: 'getList',
      getPreList: 'getPreList'
    }),
    closeModal(type) {
      this.changeState({key: type, value: false});
      this.resert();
    },
    submitSearch() {
      const { facetFieldsSelectFake, facetFieldsFake } = this;
      const url = utils.getUrl(facetFieldsSelectFake, facetFieldsFake);
      location.href = url;
    },
    handleScroll(e) {
      const { getScrollTop, getWindowHeight, getScrollHeight } = utils;
      const scrollTop = getScrollTop();
      const windowHeight = getWindowHeight();
      const scrollHeight = getScrollHeight();

      // 设置滑动方向
      this.isScrollDown = scrollTop > this.scrollTop;
      this.scrollTop = scrollTop;

      // 触底
      if (scrollTop + windowHeight >= scrollHeight - 100) {

        if (this.timer) clearTimeout(this.timer);

        this.timer = setTimeout(() => {
          if ( this.total > this.list.length ) {
            !this.loading && this.getList();
          } else {
            this.hasMore = false;
          }
        }, 200);
      }
    }
  },
  created() {
    let { options = '' } = this.$route.params;
    let { keyword = '' } = this.$route.query;
    let arr = [];
    options && arr.push(options);
    keyword && arr.push(`keyword-${keyword}`);
    if (arr.length) {
      this.getParamsByUrl(utils.formatUrlOptions(arr.join('--')));
    }
    this.getList();
  },
  mounted() {
    document.addEventListener("scroll", this.handleScroll);
  },
  beforeDestory () {
    document.removeEventListener("scroll", this.handleScroll);
  },
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>