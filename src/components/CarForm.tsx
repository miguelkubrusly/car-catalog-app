import { useDispatch, useSelector } from "react-redux";
import { addCar, changeCost, changeName } from "../store/store";
import { ChangeEvent, FormEvent } from "react";

function CarForm() {
  const { name, cost } = useSelector((state: any) => state.carForm);
  const dispatch = useDispatch();

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeName(event.target.value));
  };

  const handleCostChange = (event: ChangeEvent<HTMLInputElement>) => {
    const costInput = parseFloat(Number(event.target.value).toFixed(2));
    dispatch(changeCost(costInput) || 0);
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch(
      addCar({
        name,
        cost,
      })
    );
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form id="car-form" onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label" htmlFor="car-form-name">
              Name:
            </label>
            <input
              id="car-form-name"
              className="input is-expanded"
              type="text"
              value={name || ""}
              onChange={handleNameChange}
            ></input>
          </div>
          <div className="field">
            <label className="label" htmlFor="car-form-cost">
              Cost:
            </label>
            <input
              id="car-form-cost"
              type="number"
              value={cost || ""}
              onChange={handleCostChange}
            ></input>
          </div>
        </div>
        <div className="field">
          <button className="button is-link" type="submit">
            Add Car
          </button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
