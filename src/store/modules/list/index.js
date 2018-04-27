import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export default {
  namespaced: true,
  state() {
    return {
      loading: false,
      // 洲
      continent: '',
      // 国家列表
      countryList: [],
      // 选中国家数据
      countrySelectList: [],
      // 临时选中国家数据，未点击确定
      countrySelectFake: [],
      tripAreas: [],
      // 是否显示国家筛选框
      showCountryModal: false,
      // 天数
      days: { min: null, max: null },
      // 临时操作天数
      daysFake: { min: null, max: null },
      // 是否显示天数选择框
      showDaysModal: false,
      // 页数
      startFrom: 1,
      // 列表数据
      list: [],
      total: 10000,
      errorModal: {
        show: false,
        text: ''
      }
    }
  },
  actions,
  getters,
  mutations
};
