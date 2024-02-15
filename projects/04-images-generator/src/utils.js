import axios from "axios";

export const customAuth = (searchTerm) => {
  return axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
      Authorization: `Client-ID 0CkR8NKvj5mBVmTCZUQVVwmt3_IcFImze6ELqkwhSYc`,
    },
    params: {
      page: "1",
      query: searchTerm,
      per_page: "5",
      order_by: "relevant",
    },
  });
};
