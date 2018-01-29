import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

var state = {
    titlenames: '表单标题',
    pagename: '页面标题',
}
const mutations = {
    changTitle(state,newtitle) {
        // alert(1);
        state.titlenames = newtitle;
    },
    changPagename(state,newpagename) {
        state.pagename = newpagename;
    }
}
export default new Vuex.Store({
    state,mutations
});

