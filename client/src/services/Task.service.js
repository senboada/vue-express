import httpClient from "../conf/HttpClient";

const TaskService = {};
TaskService.getTask = async () => {
  const result = await httpClient.get("http://localhost:3000/task");
  if (result.status === 200) {
    return result.data;
  }
  return [];
};

TaskService.getTaskid = async (id) => {
  const result = await httpClient.get(`http://localhost:3000/task/${id}`);
  if (result.status === 200) {
    return result.data;
  }
  return [];
};

TaskService.saveTask = async (title, end_date) => {
  const result = await httpClient.post("http://localhost:3000/task", {
    title,
    end_date,
  });
  if (result.status === 200) {
    return result.data;
  }
  return [];
};

TaskService.editTask = async (id, title, end_date) => {
  const result = await httpClient.put(`http://localhost:3000/task/${id}`, {
    title,
    end_date,
  });
  if (result.status === 200) {
    return result.data;
  }
  return [];
};

TaskService.destroy = async (id) => {
  const result = await httpClient.delete(`http://localhost:3000/task/${id}`);
  if (result.status === 200) {
    return result.data;
  }
};

export default TaskService;
