import axios, { Axios } from "axios";

const client: Axios = axios.create({
  baseURL: "localhost:3000/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default client;
