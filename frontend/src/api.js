const API_URL = "http://MyTodoApp-env.eba-yjznh8x8.eu-north-1.elasticbeanstalk.com";

export const fetchTasks = async () => {
  // Inga API-ku badhula API_URL nu irukanum
  const res = await fetch(API_URL + "/tasks");
  return res.json();
};

export const createTask = async (task) => {
  const res = await fetch(API_URL + "/tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task)
  });
  return res.json();
};

export const updateTask = async (id, task) => {
  const res = await fetch(API_URL + "/tasks/" + id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task)
  });
  return res.json();
};

export const deleteTask = async (id) => {
  return fetch(API_URL + "/tasks/" + id, {
    method: "DELETE"
  });
};