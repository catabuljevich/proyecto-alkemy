import axios from "axios";

const LoginSource = axios.create({
  baseURL: "http://challenge-react.alkemy.org/",
});

export default LoginSource;
