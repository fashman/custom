import { getDetail } from '@/api';
import { GET_DETAILINFO, CHANGE_STATE } from './mutations';

export default {
  async getDetailInfo({ commit, state }, payload) {
    if ( !state.loading ) {
      commit(CHANGE_STATE, { key: 'loading', value: true });
    }
    commit(CHANGE_STATE, { key: 'errorModal', value: {
      show: false, text: ''
    }});
    try {
      let res =  await getDetail(payload);
      commit(CHANGE_STATE, { key: 'loading', value: false });
      if ( res.rs === 1 ) {
        document.title = res.data.translation.title;
        commit(GET_DETAILINFO, { detail: res.data });
      } else {
        commit(CHANGE_STATE, { key: 'errorModal', value: {
          show: true, text: `获取产品信息失败，${res.msg}`
        }});
      }
    } catch (error) {
      commit(CHANGE_STATE, { key: 'errorModal', value: {
        show: true, text: '网络异常，请稍后重试'
      }});
    }
  }
}