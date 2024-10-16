import { configureStore } from "@reduxjs/toolkit";
import { carFormReducer, changeName, changeCost } from "./slices/carFormSlice";
import {
  carsReducer,
  changeSearchTerm,
  addCar,
  removeCar,
} from "./slices/carListSlice";

const store = configureStore({
  reducer: {
    carForm: carFormReducer,
    cars: carsReducer,
  },
});

export { store, changeSearchTerm, changeName, changeCost, addCar, removeCar };
