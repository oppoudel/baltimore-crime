import React, { useContext } from "react";
import DataContext from "../../DataContext";
import { groupDataByType, groupDataByDistrict } from "../utils";
import CrimeTypes from "./CrimeType";
import Districts from "./Districts";

export default function Tables() {
  const crimes = useContext(DataContext);
  const types = groupDataByType(crimes);
  const districts = groupDataByDistrict(crimes);
  return (
    <div>
      <CrimeTypes data={types} />
      <Districts data={districts} />
    </div>
  );
}
