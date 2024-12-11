const app = Vue.createApp({
  data() {
    return {
      userClass: "user1",
      isParagraphVisible: true,
      paragraphBackgroundColor: "purple",
    };
  },
  methods: {
    toggleParagraph() {
      this.isParagraphVisible = !this.isParagraphVisible;
    },
  },
});

app.mount("#assignment");
