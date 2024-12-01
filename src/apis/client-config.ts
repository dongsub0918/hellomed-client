import axios, { Axios } from "axios";

const baseURL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://hellomed-api.com/api/v1/";

const client: Axios = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default client;
