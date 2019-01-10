import React from "react";
import { Dropdown, Segment, Header } from "semantic-ui-react";

const options = [
  { text: "Central", value: "CENTRAL", key: 0 },
  { text: "Southeastern", value: "SOUTHEASTERN", key: 1 },
  { text: "Eastern", value: "EASTERN", key: 2 },
  { text: "Northeastern", value: "NORTHEASTERN", key: 3 },
  { text: "NorthWestern", value: "NORTHWESTERN", key: 4 },
  { text: "Southwestern", value: "SOUTHWESTERN", key: 5 },
  { text: "Western", value: "WESTERN", key: 6 },
  { text: "Southern", value: "SOUTHERN", key: 7 },
  { text: "Northern", value: "NORTHERN", key: 8 }
];

export default function CrimeSelection({ selected, setDistrictSelection }) {
  const handleSelectedChanged = (e, { value }) => {
    setDistrictSelection(value);
  };
  return (
    <Segment>
      <Header as="h4">Filter by Police District</Header>
      <Dropdown
        placeholder="Select District"
        fluid
        selection
        multiple
        options={options}
        value={selected}
        onChange={handleSelectedChanged}
      />
    </Segment>
  );
}
