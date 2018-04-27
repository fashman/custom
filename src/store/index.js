import Vue from 'vue';
import Vuex from 'vuex';
import index from './modules/index';
import list from './modules/list';
import detail from './modules/detail';
import intention from './modules/intention';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
    index,
		list,
		detail,
		intention
  }
});
