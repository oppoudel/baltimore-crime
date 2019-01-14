import React from "react";
import { groupDataByType, groupDataByMonth } from "../utils";
import Types from "./Type";
import Months from "./Months";

export default function Charts({ crimes }) {
  const types = groupDataByType(crimes);
  const months = groupDataByMonth(crimes);
  return (
    <div>
      <Months data={months} />
      <Types data={types} />
    </div>
  );
}
