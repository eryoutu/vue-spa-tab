export default function(WrappedComponent) {
  return {
    data() {
      return {
        ids: [],
        activeId: 0
      };
    },
    methods: {
      init() {
        const id = Number(this.$route.params.id);
        console.log(id);
        if (!this.ids.includes(id)) {
          this.ids.push(id);
        }
        this.activeId = id;
      }
    },
    watch: {
      "$route.params.id": {
        handler() {
          this.init();
        }
      }
    },
    render(h) {
      const children = this.ids.map(id =>
        h(WrappedComponent, {
          props: {
            id
          },
          style: { display: this.activeId == id ? undefined : "none" }
        })
      );
      return h("div", children);
    },
    created() {
      this.init();
      this.$bus.$on("delete-tab", tab => {
        this.ids = this.ids.filter(item => item != tab.params.id);
      });
    }
    // activated() {
    //   console.log("activated");
    //   this.init();
    // },
    // beforeRouteUpdate(to, from, next) {
    //   this.activeId = Number(to.params.id);
    //   console.log("route update", this.activeId);
    //   next();
    // }
  };
}
