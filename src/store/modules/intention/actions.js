import { submitIntention } from '@/api';
import { 
  CHANGE_STATE
} from './mutations';

export default {
  async submitForm({ commit, state }, payload) {
    commit(CHANGE_STATE, { key: 'loading', value: true });
    try {
      let res = await submitIntention(payload.data);
      if( res.result ) {
        commit(CHANGE_STATE, { key: 'success', value: true });
      } else {
        commit(CHANGE_STATE, { key: 'errorModal', value: {
          show: true, text: '提交失败，请稍后再试！'
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