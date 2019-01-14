import React from "react";
import { Header, Container } from "semantic-ui-react";
import "./Header.css";
import { format } from "date-fns";

function Head({ length, dates }) {
  const startDate = format(dates[0], "MMM Do, YYYY");
  const endDate = format(dates[1], "MMM Do, YYYY");
  return (
    <div className="header-container">
      <Container>
        <Header
          as="h3"
          style={{
            textTransform: "capitalize",
            textAlign: "center"
          }}
        >
          <p>Total Number of Crimes: {length}</p>
          {startDate && endDate ? (
            <p>
              ({startDate} - {endDate})
            </p>
          ) : null}
        </Header>
      </Container>
    </div>
  );
}

export default Head;
