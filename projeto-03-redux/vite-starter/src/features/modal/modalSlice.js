import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, actions) => {
      state.isOpen = true;
    },
    closeModal: (state, actions) => {
      state.isOpen = false;
    },
  },
});
export const { closeModal, openModal } = modalSlice.actions;

export default modalSlice.reducer;
