import { useSelector } from "react-redux";
import searchList from "../hooks/searchList";

function TotalCarValue() {
  const { data, searchTerm } = useSelector((state: RootState) => state.cars);

  const filteredList = searchList(data, searchTerm, "name");
  const totalValue: number = filteredList.reduce(
    (total, car) => total + car.cost,
    0
  );

  return <div className="car-value">Total Cost: ${totalValue}</div>;
}

export default TotalCarValue;
