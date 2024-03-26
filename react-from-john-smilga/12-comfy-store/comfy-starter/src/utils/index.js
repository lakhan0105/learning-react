import axios from "axios";

const custFetch = axios.create({
  baseURL: "https://strapi-store-server.onrender.com/api",
});

export default custFetch;
