export const GET_DETAILINFO = 'GET_DETAILINFO';
export const CHANGE_STATE = 'CHANGE_STATE';

export default {
	[GET_DETAILINFO](state, payload) {
		state.detail = payload.detail;
	},
	[CHANGE_STATE](state, payload) {
    const { key, value } = payload;
		state[key] = value;
  }
}
