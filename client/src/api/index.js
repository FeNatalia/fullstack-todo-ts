import axios from "axios";
// prettier-ignore
const base = "http://localhost:3001";

export const getTodos = async () => {
  const url = `${base}/api/todos`;
  const res = await axios.get(url);
  return res.data;
};
