import { createSlice } from "@reduxjs/toolkit";

const carFormSlice = createSlice({
  name: "carForm",
  initialState: {
    name: "",
    cost: 0.0,
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeCost(state, action) {
      state.cost = parseFloat(Number(action.payload).toFixed(2));
    },
  },
});

export const { changeName, changeCost } = carFormSlice.actions;
export const carFormReducer = carFormSlice.reducer;
