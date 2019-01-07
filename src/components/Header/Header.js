import React from "react";
import { Header, Container } from "semantic-ui-react";
import "./Header.css";

function Head() {
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
          Service requests in Last days
        </Header>
      </Container>
    </div>
  );
}

export default Head;
