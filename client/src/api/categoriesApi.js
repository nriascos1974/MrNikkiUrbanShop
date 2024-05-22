import axios from 'axios';

export const getCategoriesWithSubcategories = async () => {
  try {
    const response = await axios.get(`/categories`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener categorías:', error);
    return [];
  }
};