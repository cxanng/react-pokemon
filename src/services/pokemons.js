import axios from "axios";
import { BASE_URL } from "../utils/constant";

export const fetchPokemons = async (page) => {
  const res = await axios.get(`${BASE_URL}/pokemon?offset=${page*12-12}&limit=12`);
  return res.data;
}

export const getPokemonByName = async (name) => {
  const res = await axios.get(`${BASE_URL}/pokemon/${name}`);
  return res.data;
}

export const getAllTypes = async () => {
  const res = await axios.get(`${BASE_URL}/type/`);
  return res.data;
}

export const getType = async (name, page = 0) => {
  const res = await axios.get(`${BASE_URL}/type/${name}`);
  return res.data.pokemon;
}