import Vue from 'vue';
import Vuex from 'vuex';
import index from './modules/index';
import list from './modules/list';
import detail from './modules/detail';
import intention from './modules/intention';
import search from './modules/search';
import brand from './modules/brand';

import createLogger from 'vuex/dist/logger'

Vue.use(Vuex);

const isDev = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
	modules: {
    index,
		list,
		detail,
		intention,
		search,
		brand
	},
	// strict: isDev,
	plugins: isDev ? [createLogger()] : []
});
