import axios from "axios";
const API_URL = "https://localhost:3000/api";
import { useRouter } from "next/router";

//HACE LAS PETICIONES AL BACK:
export const fetchProducts = async (filters, orderBy, page) => {
  const params = {
    ...filters,
    orderBy,
    page,
  };

  try {

    const response = await axios.get(`${API_URL}/products`, { params });
    return response.data;

  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};





