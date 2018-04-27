export const FORM_DATA = 'FORM_DATA';

export const CHANGE_STATE = 'CHANGE_STATE';
export const RESERT_ALL = 'RESERT_ALL';

export default {
	[FORM_DATA](state, payload) {
		state.data = payload.data;
	},
	[CHANGE_STATE](state, payload) {

		const fn = ( item ) => {
			const { key, value } = item;
			// 成功后清空表单
			if ( key === 'success' ) {
				state.data = {
					...state.data,
					destinations: '', 
					peopleNums: '', 
					duration: '', 
					customeDemand: '', 
					contactInfo: { mobile: '', name: '', countryCode: '86', }
				};
			}
			state[key] = value;
		};

		if ( payload instanceof Array ) {
			payload.forEach(v => { fn(v); })
		} else {
			fn( payload );
		}
	},
	[RESERT_ALL](state, payload) {
		state.data = {
			destinations: '', 
			peopleNums: null, 
			duration: null, 
			customeDemand: '', 
			source:'H5',
			channel:'WOQU', 
			contactInfo: {
				mobile: '',
				name: '',
				countryCode: '86',
			}
		}
	}
}
