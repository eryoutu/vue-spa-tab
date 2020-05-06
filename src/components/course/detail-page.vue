<template>
  <div>this is 课程 {{ $route.params.id }}</div>
</template>

<script>
export default {
  methods: {},
  created() {
    this.$store.commit("CHANGE_TAB_NAME", {
      title: `课程${this.$route.params.id}`,
      path: this.$route.fullPath
    });
  }
};
</script>

<style></style>
