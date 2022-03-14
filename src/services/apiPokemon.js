import axios from "axios";

export const pokeData = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon",
});


