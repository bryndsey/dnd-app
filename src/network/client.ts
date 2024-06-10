import axios from "axios";

export const client = axios.create({
  baseURL: "https://www.dnd5eapi.co",
  headers: {
    Accept: "application/json",
  },
});
