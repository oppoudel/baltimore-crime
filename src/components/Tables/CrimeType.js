import React from "react";
import { Table, Segment, Header } from "semantic-ui-react";
import { CSVLink } from "react-csv";

export default function TopTenCrimes({ data }) {
  return (
    <Segment>
      <Header as="h4" style={{ textAlign: "center" }}>
        Top Ten Crimes by Total Number Crimes
      </Header>
      <Table striped style={{ marginTop: "10px" }}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Crime Type</Table.HeaderCell>
            <Table.HeaderCell>Total</Table.HeaderCell>
            <Table.HeaderCell>Inside VRI</Table.HeaderCell>
            <Table.HeaderCell>Outside VRI</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map(({ Types, Total, inVRI, outsideVRI }) => (
            <Table.Row key={Types}>
              <Table.Cell>{Types}</Table.Cell>
              <Table.Cell>{Total}</Table.Cell>
              <Table.Cell>{inVRI}</Table.Cell>
              <Table.Cell>{outsideVRI}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <CSVLink
        data={data}
        filename={"crimes.csv"}
        className="ui button btn"
        target="_blank"
      >
        Download Crimes Table Data
      </CSVLink>
    </Segment>
  );
}
