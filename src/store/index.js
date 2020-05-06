import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tabs: []
  },
  mutations: {
    /* 标签页相关 */
    // 增加一个tab
    ADD_TAB(state, { tab, preTab }) {
      const { name, fullPath: path, params } = tab;
      const newTab = {
        name,
        path,
        title: tab.meta.tab.name,
        params
      };
      console.log(
        preTab && preTab.fullPath,
        tab.fullPath,
        preTab && preTab.fullPath.indexOf(tab.fullPath)
      );
      // 顶级页面（且只有当不是当前页面的顶级页面，才清空）
      if (tab.meta.tab.type === "TOP") {
        let isSwitch = true;
        if (preTab && preTab.fullPath.indexOf(tab.fullPath) === 0) {
          isSwitch = false;
        }
        if (isSwitch) {
          state.tabs = [newTab];
          return;
        }
      }
      // 普通页面
      const arr = state.tabs;
      const l = arr.length;
      for (let i = 0; i < l; i++) {
        if (tab.fullPath === arr[i].path) {
          return;
        }
      }
      state.tabs.push(newTab);
    },
    // 删除一个tab
    DELETE_TAB(state, index) {
      const arr = state.tabs;
      if (arr.length <= 1) return;
      window.$bus.$emit("delete-tab", state.tabs[index]);
      arr.splice(index, 1);
    },
    // 修改tab名称
    CHANGE_TAB_NAME(state, { path, title }) {
      //根据path查找tab
      const { tabs } = state;
      const l = tabs.length;
      for (let i = 0; i < l; i++) {
        const tab = tabs[i];
        if (tab.path === path) {
          tab.title = title;
          break;
        }
      }
    }
  },
  actions: {},
  modules: {}
});
