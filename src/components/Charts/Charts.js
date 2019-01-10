import React from "react";
import { groupDataByType } from "../utils";
import Types from "./Type";

export default function Charts({ crimes }) {
  const types = groupDataByType(crimes);
  return (
    <div>
      <Types data={types} />
    </div>
  );
}
