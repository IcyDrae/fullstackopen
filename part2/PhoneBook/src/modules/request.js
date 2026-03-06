import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request;
};

const createNew = (data) => {
  return axios.post(baseUrl, data)
};

const deletePerson = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

export default {
  getAll: getAll,
  createNew: createNew,
  deletePerson: deletePerson
};

