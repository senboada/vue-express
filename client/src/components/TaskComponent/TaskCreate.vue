<template>
  <div class="row">
    <div class="container mb-3"><h3>Create task</h3></div>
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-2">
          <form @submit.prevent="save()">
            <div class="form-group">
              <label for="exampleFormControlInput1">Title:</label>
              <input
                type="title"
                class="form-control"
                id="title"
                placeholder="title"
                v-model="title"
              />
            </div>
            <div class="form-group mb-3">
              <label for="exampleFormControlInput1">Finished:</label>
              <Datepicker v-model="date"></Datepicker>
            </div>
            <div class="btn-group" role="group" aria-label="Basic example">
              <router-link to="/" class="btn btn-secondary">Back</router-link>
              <button type="submit" class="btn btn-success">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaskService from "../../services/Task.service";
import Datepicker from "@vuepic/vue-datepicker";

export default {
  components: { Datepicker },
  name: "TaskCreate",
  data() {
    return {
      date: "",
      title: "",
    };
  },
  methods: {
    async save() {
      const result = await TaskService.saveTask(this.title, this.date);
      if (result) {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style></style>
