const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  computed: {
    result() {
      if (this.counter < 37) {
        return "Not there yet";
      } else if (this.counter > 37) {
        return "Too much!";
      } else {
        return this.counter;
      }
    },
  },
  watch: {
    counter() {
      console.log("Watcher executing...", this.counter);
      setTimeout(() => {
        console.log("Timeout executed", this.counter);
        this.counter = 0;
      }, 5000);
    },
  },
  methods: {
    add(number) {
      this.counter = this.counter + number;
    },
  },
});

app.mount("#assignment");
