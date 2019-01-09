import React from "react";
import { Dropdown, Segment, Header } from "semantic-ui-react";

const options = [
  { text: "Shooting", value: "SHOOTING", key: 0 },
  { text: "Homicide", value: "HOMICIDE", key: 1 },
  { text: "Arson", value: "ARSON", key: 2 },
  { text: "Rape", value: "RAPE", key: 3 },
  { text: "Agg. Assault", value: "AGG. ASSAULT", key: 4 }
];

export default function CrimeSelection({ selected, setSelection }) {
  const handleSelectedChanged = (e, { value }) => {
    setSelection(value);
  };
  return (
    <Segment>
      <Header as="h4">Filter by Crime Type</Header>
      <Dropdown
        placeholder="Select Crime Type"
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
