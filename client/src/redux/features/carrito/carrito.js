import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { autoLoginUser } from "../auth/authSlice";
import axios from "axios";

// enviar productos
export const sendProducts = createAsyncThunk(
  "shoppingCart/sendProducts",
  async (product, { getState, dispatch }) => {
    try {
      const token = localStorage.getItem("user_verified");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.post("/shoppingcart", [product], config);

      // Guardar los productos devueltos por la API en el localStorage
      // localStorage.setItem("shopping_cart", JSON.stringify(response.data.products));

      dispatch(autoLoginUser(token));

      return response.data.products;
    } catch (error) {
      console.error(error);
      return Promise.reject(error.message);
    }
  }
);

// enviar productos
export const deleteProducts = createAsyncThunk(
  "shoppingCart/deleteProducts",
  async (itemDelete, { getState, dispatch }) => {
    try {
      const token = localStorage.getItem("user_verified");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.put("/shoppingcartdelete", itemDelete);

      // Guardar los productos devueltos por la API en el localStorage
      // localStorage.setItem("shopping_cart", JSON.stringify(response.data.products));

      dispatch(autoLoginUser(token));

      return response.data.products;
    } catch (error) {
      console.error(error);
      return Promise.reject(error.message);
    }
  }
);

const carritoSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    products: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      //------Send Products--------
      .addCase(sendProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(sendProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(sendProducts.rejected, (state, action) => {
        console.log(action);
        state.status = "failed";
        state.error = action.error.message;
      })
      //------Send Products--------
      .addCase(deleteProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(deleteProducts.rejected, (state, action) => {
        console.log(action);
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addProduct, verifyLocalStorageProducts } = carritoSlice.actions;
export default carritoSlice.reducer;
