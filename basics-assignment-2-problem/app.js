const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      firstInputValue: "",
      secondInputValue: "",
    };
  },
  methods: {
    showAlert() {
      alert("Hello, World!");
    },
    showInputValueOnKeydown(event) {
      this.firstInputValue = event.target.value;
    },
    showInputValueOnEnter(event) {
      this.secondInputValue = event.target.value;
    },
  },
});

app.mount("#assignment");
