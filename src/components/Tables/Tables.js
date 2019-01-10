import React from "react";
import { groupDataByType, groupDataByDistrict } from "../utils";
import CrimeTypes from "./CrimeType";
import Districts from "./Districts";

export default function Tables({ crimes }) {
  const types = groupDataByType(crimes);
  const districts = groupDataByDistrict(crimes);
  return (
    <div>
      <CrimeTypes data={types} />
      <Districts data={districts} />
    </div>
  );
}
