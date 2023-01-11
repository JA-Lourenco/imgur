import axios from "axios";

const myHeader = {
  Authorization: "Client-ID 836ff3e00fe4df9",
};

const api = axios.create({
  baseURL: "https://api.imgur.com/3",
  headers: myHeader,
});

export default api;
