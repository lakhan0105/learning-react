import axios from "axios";

const custFetch = axios.create({
  baseURL: "https://redux-toolkit-jobster-api-server.onrender.com/api/v1",
});

export default custFetch;
