import { configureStore } from "@reduxjs/toolkit";
import { carFormReducer, changeName, changeCost } from "./slices/carFormSlice";
import {
  carListReducer,
  changeSearchTerm,
  addCar,
  removeCar,
} from "./slices/carListSlice";

const store = configureStore({
  reducer: {
    carForm: carFormReducer,
    carList: carListReducer,
  },
});

export { store, changeSearchTerm, changeName, changeCost, addCar, removeCar };
