export const CHANGE_STATE = 'CHANGE_STATE';

export default {
	[CHANGE_STATE](state, payload) {
    const { key, value } = payload;
    state[key] = value;
  }
}
