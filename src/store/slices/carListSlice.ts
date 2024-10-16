import { createSlice, nanoid } from "@reduxjs/toolkit";

const carListSlice = createSlice({
  name: "carList",
  initialState: {
    searchTerm: "",
    cars: [] as Car[],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      state.cars.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar(state, action) {
      state.cars = state.cars.filter((car: Car) => {
        return car.id !== action.payload.id;
      });
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carListSlice.actions;
export const carListReducer = carListSlice.reducer;
