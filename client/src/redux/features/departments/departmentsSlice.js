import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    departments: [],
    cities: [],
    loading: false,
    error: null
};


export const getDepartments = createAsyncThunk(
    "departments/getDepartments",
    async () => {
        const response = await axios.get('/departments');
        return response.data;
    }
)

export const getCities = createAsyncThunk(
    "cities/getCities",
    async (id) => {
        const response = await axios.get(`/departmentcities?id=${id}`)
        return response.data;
    }
)



const departmentSlice = createSlice({
    name: "departments",
    initialState,
    extraReducers: (builder) => {
        builder
            // Acciones para traer los departamentos
            .addCase(getDepartments.pending, (state) => {
                state.loading = true;
            })
            .addCase(getDepartments.fulfilled, (state, action) => {
                state.loading = false;
                state.departments = action.payload;
            })
            .addCase(getDepartments.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Acciones para traer las ciudades del departamento seleccionado
            .addCase(getCities.pending, (state) => {
                state.loading = true;
            })
            .addCase(getCities.fulfilled, (state, action) => {
                state.loading = false;
                state.cities = action.payload;
            })
            .addCase(getCities.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export default departmentSlice.reducer;

