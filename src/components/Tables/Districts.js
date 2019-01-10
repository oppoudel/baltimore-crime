import React from "react";
import { Table, Segment, Header } from "semantic-ui-react";
import { CSVLink } from "react-csv";

export default function TopTenCrimes({ data }) {
  return (
    <Segment>
      <Header as="h4" style={{ textAlign: "center" }}>
        Police Districts by Total Number Crimes
      </Header>
      <Table striped style={{ marginTop: "10px" }}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Police District</Table.HeaderCell>
            <Table.HeaderCell>Total</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map(({ District, Total }) => (
            <Table.Row key={District}>
              <Table.Cell>{District}</Table.Cell>
              <Table.Cell>{Total}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <CSVLink
        data={data}
        filename={"crimes.csv"}
        className="ui button btn primary"
        target="_blank"
      >
        Download Districts Table Data
      </CSVLink>
    </Segment>
  );
}
