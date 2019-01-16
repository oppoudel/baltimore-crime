import React, { useContext } from "react";
import { Header, Container } from "semantic-ui-react";
import DataContext from "../../DataContext";
import "./Header.css";

function Head() {
  const data = useContext(DataContext);
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
          Total Number of Crimes: {data.length}
        </Header>
      </Container>
    </div>
  );
}

export default Head;
