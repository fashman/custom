import { getIndexInfo } from '@/api';
import { CHANGE_STATE } from './mutations';

export default {
  async getIndex({ commit, state }, payload) {
    try {
      let res =  await getIndexInfo(payload);
      if ( res.rs === 1 && res.data.tag ) {
        commit(CHANGE_STATE, { key: 'tag', value: res.data.tag });
      } else {
        // commit(CHANGE_STATE, { key: 'errorModal', value: {
        //   show: true, text: `获取首页数据失败，${res.msg}`
        // }});
      }
    } catch (error) {
      // commit(CHANGE_STATE, { key: 'errorModal', value: {
      //   show: true, text: '网络异常，请稍后重试'
      // }});
    }
  }
}