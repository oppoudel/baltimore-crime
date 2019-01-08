import React, { useState } from "react";
import { Form, Segment, Header, Button } from "semantic-ui-react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";

export default function DateSelection({ onDateChange }) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleClick = evt => {
    evt.preventDefault();
    if (startDate && endDate) onDateChange([startDate, endDate]);
  };

  return (
    <Segment>
      <Header as="h4">Filter by Date</Header>
      <Form>
        <Form.Group>
          <SemanticDatepicker
            label="Start Date"
            id="startDate"
            format="MM/DD/YYYY"
            onDateChange={setStartDate}
          />
        </Form.Group>
        <Form.Group>
          <SemanticDatepicker
            label="End date"
            id="endDate"
            format="MM/DD/YYYY"
            onDateChange={setEndDate}
          />
        </Form.Group>
        <Button type="submit" onClick={handleClick}>
          Submit
        </Button>
      </Form>
    </Segment>
  );
}
