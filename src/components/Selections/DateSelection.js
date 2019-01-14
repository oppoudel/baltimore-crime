import React, { useState, useEffect } from "react";
import { Form, Segment, Header } from "semantic-ui-react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";

export default function DateSelection({ onDateChange }) {
  const [startDate, setStartDate] = useState(new Date("01-01-2012"));
  const [endDate, setEndDate] = useState(new Date("12-31-2018"));
  const [error, setError] = useState(false);

  useEffect(
    () => {
      if (startDate && endDate && startDate > endDate) {
        setError(true);
      } else {
        setError(false);
        onDateChange([startDate, endDate]);
      }
    },
    [startDate, endDate]
  );

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
            error={error}
            selected={startDate}
          />
        </Form.Group>
        <Form.Group>
          <SemanticDatepicker
            label="End date"
            id="endDate"
            format="MM/DD/YYYY"
            onDateChange={setEndDate}
            error={error}
            selected={endDate}
          />
        </Form.Group>
      </Form>
    </Segment>
  );
}
