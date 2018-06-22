export const CHANGE_STATE = 'CHANGE_STATE';
// 列表数据
export const GET_LISTSUCCESS = 'GET_LISTSUCCESS';
// 筛选
export const GET_PRELISTSUCCESS = 'GET_PRELISTSUCCESS';
// 洲 国家 地区 城市有联动关系，上级改变需要清空下级已选
export const CLEAR_DESTINATION = 'CLEAR_DESTINATION';
// 重置
export const RESERT = 'RESERT';
// 解析URL参数
export const GET_PARAMSBYURL = 'GET_PARAMSBYURL';

export default {
	[CHANGE_STATE](state, payload) {
		if (payload instanceof Array) {
			payload.forEach(val => {
				const { key, value } = val;
				state[key] = value;
			});
		} else {
			const { key, value } = payload;
			state[key] = value;
		}
	},
	// 列表数据
	[GET_LISTSUCCESS](state, payload) {
		const listState = JSON.parse(JSON.stringify(state));
		const { list, total, isPush, facetFields } = payload;
		const arr = isPush ? [ ...state.list, ...payload.list ] : [ ...payload.list ];
		const { facetFieldsSelect, facetFieldsSelectFake} = listState;
		// 价格区间 和 值设置
		const price = facetFields.find(v=>v.field === 'search_price');
		const search_price = [
			// 已选值时设为已选值，未选值时设为最大最小值
			facetFieldsSelectFake.search_price[0] || Math.floor(price.facetItems[0].score || 0),
			facetFieldsSelectFake.search_price[1] || Math.ceil(price.facetItems[1].score || 1000)
		];
		// 重置筛选数据
		state.facetFieldsSelectFake = { ...facetFieldsSelectFake, search_price };
		state.facetFieldsSelect = { ...facetFieldsSelect, search_price };
		state.list = arr;
		state.startFrom++;
		state.total = total;
		state.preTotal = total;
		state.facetFields = facetFields;
		state.facetFieldsFake = facetFields;
	},
	// 根据URL设置相关参数
	[GET_PARAMSBYURL](state, payload) {
		const { ct, ic, at, d, sl, el, itt, sct, ci, p, keyword } = payload;
		// key可能为 POI_1111 这种形式，通过 _ 切的时候要先判断下；
		
		const continent = ct ? ct.split('-') || [] : [];
		const country = ic ? ic.split('-') || [] : [];
		const area = at ? at.split('-') || [] : [];
		const city = ci ? ci.split('-') || [] : [];

		const interest_topic_tag = itt ? itt.split('-') || [] : [];
		const suitable_crowd_tag = sct ? sct.split('-') || [] : [];

		const duration = d ? d.split('-') || [] : [];
		const start_location = sl ? sl.split('-') || [] : [];
		const end_location = el ? el.split('-') || [] : [];
		const search_price = p ? p.split('-') || [0, 0] : [0, 0];

		state.facetFieldsSelect = {
			continent, country, area, duration, start_location, end_location,
			interest_topic_tag, suitable_crowd_tag, city, search_price, keyword
		};
		state.facetFieldsSelectFake = {
			continent, country, area, duration, start_location, end_location,
			interest_topic_tag, suitable_crowd_tag, city, search_price, keyword
		};
	},
	// 筛选获取数据
	[GET_PRELISTSUCCESS](state, payload) {
		const preState = JSON.parse(JSON.stringify(state));
		const { facetFields, total } = payload;
		state.preTotal = total;
		state.facetFieldsFake = facetFields;
	},
	// 洲 国家 地区 城市有联动关系，上级改变需要清空下级已选
	[CLEAR_DESTINATION](state, payload) {
		const clearState = JSON.parse(JSON.stringify(state));
		/*
		 * 清空某些已选数据
		 * 洲、国家、地区和城市存在联动，因此上级变动要把下级已选数据清空
		 * 如：先选择了某些城市，然后去修改已选国家，可能已选择的城市不属于已选国家，因此需要清空已选城市
		 * 洲、地区同上
		*/
		const facetObject = { ...clearState.facetFieldsSelectFake };
		payload.forEach(val => {
			facetObject[val] = [];
		});
		state.facetFieldsSelectFake = facetObject;
	},
	// 重置
	[RESERT](state, payload) {
		const resertState = JSON.parse(JSON.stringify(state));
		const { facetFields, facetFieldsSelect, facetFieldsSelectFake } = resertState;
		// 重置临时已选数据 和 筛选条件数据
		state.facetFieldsSelectFake = { ...facetFieldsSelect };
		state.facetFieldsFake = [ ...facetFields ];
		state.preTotal = state.total;
	}
}
