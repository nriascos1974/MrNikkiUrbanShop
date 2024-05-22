import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
  }

const menuSlice = createSlice({
    name:'menu',
    initialState,
    reducers:{
        openMenu: (state) => {
            state.isOpen ? state.isOpen = false : state.isOpen = true;
        },
    },
})

//actions
export const { openMenu } = menuSlice.actions
export default menuSlice.reducer
