import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store/store";
import filterList from "../hooks/filterList";

//TODO typing

function CarList() {
  const { data, searchTerm }: CarListSelector = useSelector(
    (state: RootState) => state.cars
  );
  const dispatch = useDispatch();

  const handleCarDelete = (car: Car) => {
    dispatch(removeCar(car.id));
  };

  const filteredList = filterList(data, searchTerm, "name");
  const renderedList = filteredList.map((car: Car) => {
    return (
      <div key={car.id} className="panel">
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car)}
        >
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
