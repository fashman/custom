import { getProductList } from '@/api';
import { 
  CHANGE_STATE,
  GET_LISTSUCCESS,
  GET_PRELISTSUCCESS
} from './mutations';

export default {
  async getList({ commit, state }, payload) {
    commit(CHANGE_STATE, [
      { key: 'loading', value: true },
      { key: 'errorModal', value: { show: false, text: '' }}
    ]);
    const isPush = typeof payload === 'undefined' ? true : payload;
    !isPush && commit(CHANGE_STATE, { key: 'startFrom', value: 1 });
    const {
      continent,country, area, city,
      start_location, end_location, search_price, keyword, duration,
      interest_topic_tag, suitable_crowd_tag
    } = state.facetFieldsSelectFake;
    const o = {
      sort: state.sort,
      startFrom: state.startFrom,
      continent: continent[0], countries: country, areas: area, cities: city,
      startLocations: start_location, endLocations: end_location, durations: duration, 
      price: search_price[0] === 0 && search_price[1] === 0 ? [] : search_price,
      interestTopicTags: interest_topic_tag, suitableCrowdTags: suitable_crowd_tag,
      keyword: keyword,
      requestUrl: location.href
    };
    try {
      let res =  await getProductList(o);
      if ( res.result ) {
        commit(GET_LISTSUCCESS, { 
          list: res.data.products || [], 
          total: res.data.total || 0,
          facetFields: res.data.facetFields,
          isPush,
        });
      } else {
        commit(CHANGE_STATE, { key: 'errorModal', value: {
          show: true, text: '获取产品列表失败'
        }});
      }
      setTimeout(() => {
        commit(CHANGE_STATE, { key: 'loading', value: false });
      }, 500);
    } catch (error) { // 无网络情况
      commit(CHANGE_STATE, [
        { key: 'loading', value: false },
        { key: 'showDestinationModal', value: false },
        { key: 'showFilterModal', value: false },
        { key: 'showThemeModal', value: false },
        { key: 'errorModal', value: {
          show: true, text: '网络异常，请稍后重试'
        }}
      ]);
    }
  },
  async getPreList({ commit, state }, payload) {
    commit(CHANGE_STATE, [
      { key: 'preloading', value: true },
      { key: 'errorModal', value: { show: false, text: '' }}
    ]);
    const {
      continent,country, area, city,
      start_location, end_location, search_price, keyword, duration,
      interest_topic_tag, suitable_crowd_tag
    } = state.facetFieldsSelectFake;
    const o = {
      sort: state.sort,
      startFrom: 1,
      continent: continent[0], countries: country, areas: area, cities: city,
      startLocations: start_location, endLocations: end_location, durations: duration, 
      price: search_price[0] === search_price[1] ? [] : search_price,
      interestTopicTags: interest_topic_tag, suitableCrowdTags: suitable_crowd_tag,
      keyword: keyword,
      requestUrl: location.href
    };
    try {
      let res =  await getProductList(o);
      if (res.result) {
        if (!res.data.products.length) {
          commit(CHANGE_STATE, { key: 'preTotal', value: 0 });
        } else {
          commit(GET_PRELISTSUCCESS, res.data);
        }
      } else {
        commit(CHANGE_STATE, { key: 'errorModal', value: {
          show: true, text: '获取产品列表失败'
        }});
      }
      setTimeout(() => {
        commit(CHANGE_STATE, { key: 'preloading', value: false });
      }, 500);
    } catch (error) { // 无网络情况
      commit(CHANGE_STATE, [
        { key: 'preloading', value: false },
        { key: 'errorModal', value: {
          show: true, text: '网络异常，请稍后重试'
        }}
      ]);
    }
  }
}