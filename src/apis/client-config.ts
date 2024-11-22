import axios, { Axios } from "axios";

const client: Axios = axios.create({
  baseURL: "https://hellomed-api.com/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default client;
