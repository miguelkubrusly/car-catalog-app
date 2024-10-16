import { ReducerCreators, Reducer, EnhancedStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store/store";
// import {cars} from "../store/store"

//TODO typing

type CarListSelector = {
  data: Car[];
  searchTerm: string;
};

function CarList() {
  const { data, searchTerm }: CarListSelector = useSelector(
    (state: any) => state.cars
  );
  const dispatch = useDispatch();

  // const handleCarDelete = (event: React.MouseEvent<HTMLButtonElement>) => {};
  // dispatch(removeCar());

  const renderedList = data.map((car: Car) => {
    return (
      <div key={car.id} className="panel">
        <p>
          {car.name} - ${car.cost}
        </p>
        <button className="button is-danger" /* onClick={handleCarDelete} */>
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {renderedList}
      <hr />
    </div>
  );
}

export default CarList;
