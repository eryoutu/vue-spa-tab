<template>
  <div id="app clearfix">
    <ul class="side fl">
      <li><router-link to="/class">班级</router-link></li>
      <li><router-link to="/course">课程</router-link></li>
    </ul>
    <div class="main">
      <ul class="nav clearfix">
        <li class="fl" v-for="tab in tabs" :key="tab.path">
          <router-link :to="tab.path">{{ tab.title }}</router-link>
        </li>
      </ul>
      <keep-alive :include="include">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["tabs"]),
    include() {
      return this.$store.state.tabs.map(item => item.name);
    }
  },
  watch: {
    $route: {
      deep: true,
      immediate: true,
      handler(to, from) {
        // 标签页处理
        if (to.name && to.meta.tab) {
          this.$store.commit("ADD_TAB", {
            tab: to,
            preTab: from
          });
        }
      }
    }
  }
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.side {
  width: 150px;
  background-color: #ddd;
  li {
    margin: 10px;
  }
}
.main {
  overflow: hidden;
}
.nav {
  margin: 0;
  padding: 0;
  background-color: pink;
  li {
    padding: 15px;
    border-right: 1px solid;
  }
}
</style>
