import axios from "axios";

// URL base de la API (idioma inglés)
const API_BASE = "https://api.tcgdex.net/v2/en";

// Obtener todas las cartas
export const getAllCards = async () => {
  const res = await axios.get(`${API_BASE}/cards`);
  return res.data;
};

// Obtener una carta por ID
export const getCardById = async (id) => {
  const res = await axios.get(`${API_BASE}/cards/${id}`);
  return res.data;
};

// Obtener todas las expansiones (sets)
export const getAllSets = async () => {
  const res = await axios.get(`${API_BASE}/sets`);
  return res.data;
};
