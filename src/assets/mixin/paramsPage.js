export default {
  data() {
    return {
      ids: [],
      activeId: 0
    };
  },
  methods: {
    init() {
      const id = Number(this.$route.params.id);
      if (!this.ids.includes(id)) {
        this.ids.push(id);
      }
      this.activeId = id;
    }
  },
  created() {
    this.$bus.$on("delete-tab", tab => {
      this.ids = this.ids.filter(item => item != tab.params.id);
    });
  },
  activated() {
    console.log("activated");
    this.init();
  },
  beforeRouteUpdate(to, from, next) {
    console.log("router update");
    this.activeId = Number(to.params.id);
    next();
  }
};
