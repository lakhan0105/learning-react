import axios from "axios";

const customAuth = axios.create({
  baseURL: "http://localhost:5000/api/tasks",
});

export default customAuth;
