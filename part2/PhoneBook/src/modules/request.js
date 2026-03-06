import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get("http://localhost:3001/persons");
  return request;
};

const createNew = (data) => {
  return axios.post("http://localhost:3001/persons", data)
};

export default {
  getAll: getAll,
  createNew: createNew
};

