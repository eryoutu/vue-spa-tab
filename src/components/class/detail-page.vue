<template>
  <div>
    <input type="text" v-model="num" />
    <p>this is 班级 {{ $route.params.id }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: ""
    };
  },
  methods: {},
  created() {
    this.$store.commit("CHANGE_TAB_NAME", {
      title: `班级${this.$route.params.id}`,
      path: this.$route.fullPath
    });
  }
};
</script>

<style></style>
