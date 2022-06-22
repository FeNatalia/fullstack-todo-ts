import axios from "axios";

const base = "http://localhost:3001";

export const addTodo = async (todo) => {
  const res = await axios.post(`${base}/api/todos`, todo);
  return res.data;
};

export const getTodos = async () => {
  const url = `${base}/api/todos`;
  const res = await axios.get(url);
  return res.data;
};

export const getTodo = async (id) => {
  const url = `${base}/api/todos/${id}`;
  const res = await axios.get(url);
  return res.data;
};
