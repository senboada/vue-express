<template>
  <div class="row">
    <div class="row">
      <div class="col-md-6 offset-md-2">
        <h3>Index tasks</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-md-10 offset-md-1">
        <table class="table table-striped">
          <thead class="thead-dark">
            <tr>
              <th scope="col">id</th>
              <th scope="col">Title</th>
              <th scope="col">Create at</th>
              <th scope="col">Finished</th>
              <th scope="col">Status</th>
              <th scope="col">Settings</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="task in tasks"
              :key="task.id"
              :class="validateDelete(task.status)"
            >
              <th scope="row">{{ task.id }}</th>
              <td>{{ task.title }}</td>
              <td>{{ formatDate(task.create_date) }}</td>
              <td>{{ formatDate(task.end_date) }}</td>
              <td>{{ task.status }}</td>
              <td>
                <div
                  class="btn-group"
                  role="group"
                  aria-label="Basic example"
                  v-if="task.status != 'deleted'"
                  @click="edit(task.id)"
                >
                  <button type="submit" class="btn btn-warning">Edit</button>
                  <button
                    type="submit"
                    class="btn btn-danger"
                    @click="destroy(task.id)"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import TaskService from "../../services/Task.service";
import moment from "moment/moment";
export default {
  name: "TaskIndex",
  data() {
    return {
      tasks: [],
    };
  },
  async mounted() {
    this.tasks = await TaskService.getTask();
  },
  methods: {
    formatDate(date) {
      return moment(date).format("MMMM Do YYYY, h:mm:ss a");
    },
    edit(id) {
      this.$router.push(`/edit-task/${id}`);
    },
    async destroy(id) {
      const result = await TaskService.destroy(id);
      if (result) {
        const cpTask = [...this.tasks];
        const index = cpTask.findIndex((element) => element.id == result.id);
        cpTask[index].status = result.status;
        this.tasks = cpTask;
      }
    },
    validateDelete(status) {
      return status == "deleted" ? "bg-danger" : "";
    },
  },
};
</script>

<style></style>
