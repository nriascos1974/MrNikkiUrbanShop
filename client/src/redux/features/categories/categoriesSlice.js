import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCategoriesWithSubcategories } from "../../../api/categoriesApi";

// Definir el estado inicial
const initialState = {
    categories: [],
    status: "idle",
    error: null
}

// Crear la funcion asincrona para obtener las categorias
export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async () => {
      const categories = await getCategoriesWithSubcategories();
      return categories;
    }
);

// Crear el slice
const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    extraReducers: (builder) => {
        builder
          .addCase(fetchCategories.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchCategories.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.categories = action.payload;
          })
          .addCase(fetchCategories.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
    },
});

export default categoriesSlice.reducer;
