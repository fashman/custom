export const CHANGE_STATE = 'CHANGE_STATE';
// 国家 选择/取消选择 操作
export const TOGGLE_COUNTRYSELECT = 'TOGGLE_COUNTRYSELECT';
// 关闭国家弹层
export const CLOSE_COUNTRYMODAL = 'CLOSE_COUNTRYMODAL';
// 重置已选中国家
export const RESERT_COUNTRYSELECTLIST = 'RESERT_COUNTRYSELECTLIST';
// 关闭天数选择框
export const CLOSE_DAYSMODAL = 'CLOSE_DAYSMODAL';
// 列表数据
export const GET_LISTSUCCESS = 'GET_LISTSUCCESS';
// 根据URL获取相关参数
export const GET_PARAMSBYURL = 'GET_PARAMSBYURL';

export default {
	[CHANGE_STATE](state, payload) {
		const { key, value } = payload;
		state[key] = value;
	},
	// 国家 选择/取消选择 操作
	[TOGGLE_COUNTRYSELECT](state, payload) {
		let has = [ ...state.countrySelectFake ];
		let isChecked = has.find(v=>v === payload.country);
		if ( isChecked ) {
			has = has.filter(v=> v !== payload.country);
		} else {
			has.push(payload.country);
		}
		state.countrySelectFake = has;
	},
	// 关闭国家弹层
	[CLOSE_COUNTRYMODAL](state, payload) {
		state.showCountryModal = false;
		state.countrySelectFake = [...state.countrySelectList];
	},
	// 重置已选中国家
	[RESERT_COUNTRYSELECTLIST](state, payload) {
		state.countrySelectFake = [];
	},
	// 关闭天数选择框
	[CLOSE_DAYSMODAL](state, payload) {
		state.showDaysModal = false;
		state.daysFake = { ...state.days };
	},
	// 列表数据
	[GET_LISTSUCCESS](state, payload) {
		const arr = [ ...state.list, ...payload.list ]
		state.list = arr;
		state.startFrom++;
		state.total = payload.total;
	},
	// 根据URL获取相关参数
	[GET_PARAMSBYURL](state, payload) {
		const { ct, ic, at, d = '_' } = payload;
		state.continent = ct || '';
		// 国家key肯能为 POI_1111 这种形式，通过 _ 切的时候要先判断下；
		state.countrySelectList = ic ? ic.match(/(POI_)?\d+([^_])?/ig) || [] : [];
		state.countrySelectFake = ic ? ic.match(/(POI_)?\d+([^_])?/ig) || [] : [];
		state.days = { min: d.split('_')[0] || null, max: d.split('_')[1] || null };
		state.daysFake = { min: d.split('_')[0] || null, max: d.split('_')[1] || null };
		state.tripAreas = at ? at.match(/(POI_)?\d+([^_])?/ig) || [] : [];
	}
}
