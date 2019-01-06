import React, { useState, useEffect } from "react";
import { csv } from "d3-fetch";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    csv("./data/Baltimore-CrimeData.csv").then(data => console.log(data));
  }, []);
  console.log(data);
  return <div className="App" />;
}

export default App;
