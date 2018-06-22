import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export default {
  namespaced: true,
  state() {
    return {
      loading: false,
      // 是否显示目的地筛选框
      showDestinationModal: false,
      // 是否显示筛选选择框
      showFilterModal: false,
      // 是否显示主题选择框
      showThemeModal: false,
      // 页数
      startFrom: 1,
      // 列表数据
      list: [],
      total: 10000,
      preTotal: 0,
      preloading: false,
      errorModal: {
        show: false,
        text: ''
      },
      sort: 0,
      facetFields: [],
      facetFieldsFake: [],
      facetFieldsSelect: {
        continent: [],
        country: [],
        duration: [],
        area: [],
        city: [],
        start_location: [],
        end_location: [],
        interest_topic_tag: [],
        suitable_crowd_tag: [],
        search_price: [0, 0],
        keyword: ''
      },
      facetFieldsSelectFake: {
        continent: [],
        country: [],
        duration: [],
        area: [],
        city: [],
        start_location: [],
        end_location: [],
        interest_topic_tag: [],
        suitable_crowd_tag: [],
        search_price: [0, 0],
        keyword: ''
      },
    }
  },
  actions,
  getters,
  mutations
};
