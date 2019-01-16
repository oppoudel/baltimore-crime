import React, { useState, useEffect } from "react";
import { Form, Segment, Header } from "semantic-ui-react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";

export default function DateSelection({ onDateChange }) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
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
            clearable={false}
            maxDate={new Date()}
            minDate={new Date("2012-01-01")}
          />
        </Form.Group>
        <Form.Group>
          <SemanticDatepicker
            label="End date"
            id="endDate"
            format="MM/DD/YYYY"
            onDateChange={setEndDate}
            error={error}
            clearable={false}
            maxDate={new Date()}
            minDate={new Date("2012-01-01")}
          />
        </Form.Group>
      </Form>
    </Segment>
  );
}
