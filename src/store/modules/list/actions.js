import { getProductList } from '@/api';
import { 
  CHANGE_STATE,
  GET_LISTSUCCESS,
  GETLIST_BYDAYS_SUCCESS,
  GETLIST_BYCOUNTRY_SUCCESS
} from './mutations';

export default {
  async getList({ commit, state }, payload) {
    commit(CHANGE_STATE, { key: 'loading', value: true });
    commit(CHANGE_STATE, { key: 'errorModal', value: {
      show: false, text: ''
    }});
    const o = {
      startFrom: state.startFrom,
      countries: state.countrySelectList,
      durationRangeStart: Math.min(state.days.min, state.days.max) || null,
      durationRangeEnd: Math.max(state.days.min, state.days.max) || null,
      continent: state.continent,
      tripAreas: state.tripAreas
    };
    try {
      let res =  await getProductList(o);
      if ( res.result ) {
        commit(GET_LISTSUCCESS, { list: res.data.products || [], total: res.data.total || 0});
        const country = res.data.facetFields && res.data.facetFields.length > 1 ? res.data.facetFields[1].facetItems : [];
        country.length && commit(CHANGE_STATE, { key: 'countryList', value: country });
      } else {
        commit(CHANGE_STATE, { key: 'errorModal', value: {
          show: true, text: '获取产品列表失败'
        }});
      }
      setTimeout(() => {
        commit(CHANGE_STATE, { key: 'loading', value: false });
      }, 500);
    } catch (error) { // 无网络情况
      commit(CHANGE_STATE, { key: 'loading', value: false });
      commit(CHANGE_STATE, { key: 'showCountryModal', value: false });
      commit(CHANGE_STATE, { key: 'showDaysModal', value: false });
      commit(CHANGE_STATE, { key: 'errorModal', value: {
        show: true, text: '网络异常，请稍后重试'
      }});
    }
  }
}