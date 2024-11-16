const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      name: "Amanda Santos",
      age: 25,
      image:
        "https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg",
    };
  },
});

app.mount("#assignment");
