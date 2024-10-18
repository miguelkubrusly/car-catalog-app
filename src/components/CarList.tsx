import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store/store";
import searchList from "../hooks/searchList";
import checkSubstringExistance from "../hooks/checkSubstringExistance";

function CarList() {
  const data = useSelector((state: RootState) => state.cars.data);
  const searchTerm = useSelector((state: RootState) => state.cars.searchTerm);
  const name = useSelector((state: RootState) => state.carForm.name);
  const dispatch = useDispatch();

  const handleCarDelete = (car: Car) => {
    dispatch(removeCar(car.id));
  };

  const filteredList: Car[] = searchList(data, searchTerm, "name");
  const renderedList: React.ReactNode = filteredList.map((car: Car) => {
    const bold = name.length > 0 && checkSubstringExistance(car.name, name);
    return (
      <div key={car.id} className={`panel`}>
        <p>
          <span className={`${bold && "bold"}`}>
            {car.name.slice(0, name.length)}
          </span>
          {car.name.slice(name.length)} - ${car.cost}
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
