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
  type RootState = {
    cars: CarListSelector;
  };
}

export {};
