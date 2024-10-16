import CarForm from "./components/CarForm";
import CarSearch from "./components/CarSearch";
import CarList from "./components/CarList";
import TotalCarValue from "./components/TotalCarValue";

function App() {
  return (
    <div className="container is-fluid">
      <CarForm />
      <CarSearch />
      <CarList />
      <TotalCarValue />
    </div>
  );
}

export default App;
