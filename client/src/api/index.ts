import axios from "axios";
import { ListItem, TodoItem } from "../ts-utils/interfaces";

const base = "http://localhost:3001";

export const addTodo = async (todo: TodoItem) => {
  const res = await axios.post(`${base}/api/todos`, todo);
  return res.data;
};

export const getTodos = async () => {
  const url = `${base}/api/todos`;
  const res = await axios.get(url);
  return res.data;
};

export const getTodo = async (id: String | undefined) => {
  const url = `${base}/api/todos/${id}`;
  const res = await axios.get(url);
  return res.data;
};

export const addItem = async (todo: ListItem) => {
  const res = await axios.post(`${base}/api/todos/${todo.owner}`, todo);
  return res.data;
};

export const getItems = async (id: String | undefined) => {
  const url = `${base}/api/todos/${id}/items`;
  const res = await axios.get(url);
  return res.data;
};

export const markDone = async (todo: TodoItem) => {
  const res = await axios.patch(`${base}/api/todos`, todo);
  return res.data;
};
