const app = Vue.createApp({
  data() {
    return {
      taskInputText: "",
      tasks: [],
      isTasksListVisible: true,
    };
  },
  computed: {
    buttonLabel() {
      return this.isTasksListVisible ? "Hide List" : "Show List";
    }
  },
  methods: {
    addTask() {
      console.log(this.taskInputText);
      this.tasks.push(this.taskInputText);
      this.taskInputText = "";
    },
    toggleTasksList() {
      this.isTasksListVisible = !this.isTasksListVisible;
    },
  },
});

app.mount("#assignment");
