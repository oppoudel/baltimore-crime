import React from "react";
import { Header, Container } from "semantic-ui-react";
import "./Header.css";

function Head({ length }) {
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
          Total Number of Crimes: {length}
        </Header>
      </Container>
    </div>
  );
}

export default Head;
