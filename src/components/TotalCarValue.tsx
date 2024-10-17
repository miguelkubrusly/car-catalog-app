import { useSelector } from "react-redux";
import searchList from "../hooks/searchList";

function TotalCarValue() {
  const { data, searchTerm } = useSelector((state: RootState) => state.cars);

  const filteredList = searchList(data, searchTerm, "name");
  const costs: number[] = filteredList.map((car) => car.cost);
  const totalValue: number = costs.reduce((total, cost) => total + cost, 0);

  return <div>{totalValue}</div>;
}

export default TotalCarValue;
