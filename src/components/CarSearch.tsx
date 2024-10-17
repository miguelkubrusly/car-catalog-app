import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store/store";
import React from "react";

function CarSearch() {
  const { searchTerm }: CarListSelector = useSelector(
    (state: any) => state.cars
  );
  const dispatch = useDispatch();

  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(changeSearchTerm(event.target.value));
  };

  return (
    <div className="list-header">
      <h3 className="title is-3">My Cars</h3>
      <div className="search field is-horizontal">
        <label className="label"></label>
        <input
          className="input"
          value={searchTerm}
          onChange={handleSearchTermChange}
        ></input>
      </div>
    </div>
  );
}

export default CarSearch;
