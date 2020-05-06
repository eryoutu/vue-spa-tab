<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ api }}</p>
    <p>{{ id }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      api: process.env.VUE_APP_API,
      id: ""
    };
  },
  created() {
    this.id = this.util.getOnlyId("about");
  }
};
</script>

<style lang="less" scoped>
.about {
  p {
    color: @main-color;
  }
}
</style>
