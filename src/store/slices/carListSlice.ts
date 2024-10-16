import { createSlice } from "@reduxjs/toolkit";

type Car = {
  name: string;
  cost: number;
};

const carListSlice = createSlice({
  name: "carList",
  initialState: [] as Car[],
  reducers: {
    addCar(state, action) {
      state.push(action.payload);
    },
    removeCar(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addCar, removeCar } = carListSlice.actions;
export const carListReducer = carListSlice.reducer;
