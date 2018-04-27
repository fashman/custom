import { getIndexInfo } from '@/api';
import { CHANGE_STATE } from './mutations';

export default {
  async getIndex({ commit, state }, payload) {
    commit(CHANGE_STATE, { key: 'loading', value: true });
    commit(CHANGE_STATE, { key: 'errorModal', value: {
      show: false, text: ''
    }});
    try {
      let res =  await getIndexInfo(payload);
      if ( res.rs === 1 ) {
        commit(CHANGE_STATE, { key: 'index', value: res.data });
      } else {
        commit(CHANGE_STATE, { key: 'errorModal', value: {
          show: true, text: `获取首页数据失败，${res.msg}`
        }});
      }
    } catch (error) {
      commit(CHANGE_STATE, { key: 'errorModal', value: {
        show: true, text: '网络异常，请稍后重试'
      }});
    }
    commit(CHANGE_STATE, { key: 'loading', value: false });
  }
}