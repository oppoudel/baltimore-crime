import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { Segment } from "semantic-ui-react";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./SelectDates.css";

export default function SelectDates() {
  const selectionRange = {
    startDate: new Date("2016-01-01"),
    endDate: new Date("2018-12-31"),
    key: "selection"
  };
  const [selection, setSelection] = useState(selectionRange);
  const handleSelect = ranges => {
    console.log(ranges.selection);
    setSelection(ranges.selection);
  };
  return (
    <Segment placeholder>
      <DateRange
        ranges={[selection]}
        onChange={handleSelect}
        className={"PreviewArea"}
      />
    </Segment>
  );
}
