<template>
  <div>
    <detail-page
      v-for="item in ids"
      :key="item"
      :id="item"
      v-show="activeId === item"
    ></detail-page>
  </div>
</template>

<script>
import detailPage from "@/components/course/detail-page.vue";
import paramsPageMixin from "@/assets/mixin/paramsPage";
export default {
  name: "courseDetail",
  components: {
    detailPage
  },
  mixins: [paramsPageMixin]
};
</script>

<style></style>
