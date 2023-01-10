import axios from "axios";

const myHeader = {
  Authorization: "",
};

const api = axios.create({
  baseURL: "https://api.imgur.com/3",
  headers: myHeader,
});

export default api;
