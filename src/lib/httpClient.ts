import axios from "axios";

export const httpClient = axios.create({
  baseURL: "https://www.dnd5eapi.co",
  headers: {
    Accept: "application/json",
  },
});
