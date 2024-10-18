declare global {
  type Car = {
    name: string;
    cost: number;
    id: string;
  };
  type CarListSelector = {
    data: Car[];
    searchTerm: string;
  };

  type CarFormSelector = {
    name: string;
    cost: number;
  };

  type RootState = {
    carForm: CarFormSelector;
    cars: CarListSelector;
  };
}

export {};
