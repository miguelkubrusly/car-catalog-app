import { useDispatch, useSelector } from "react-redux";
import { addCar, changeName } from "../store/store";
import { ChangeEvent, FormEvent } from "react";

function CarForm() {
  const carForm = useSelector((state: any) => state.carForm);
  const carList = useSelector((state: any) => state.carList);
  const dispatch = useDispatch();

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeName(event.target!.value));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch(addCar(carForm));
  };

  return (
    <form id="car-form" onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        value={carForm.name}
        onChange={handleNameChange}
      ></input>
      <button type="submit">Add Car</button>
    </form>
  );
}

export default CarForm;
