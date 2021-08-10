import axios from "axios";

const api = axios.create({
  baseURL: `https://superheroapi.com/api/10159386337269259/search/${1}`,
});

export default api;
