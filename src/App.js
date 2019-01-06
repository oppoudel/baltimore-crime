import React, { useState, useEffect } from "react";
import { csv } from "d3-fetch";
import HexagonMap from "./components/HexagonMap";
const dataUrl =
  "https://raw.githubusercontent.com/oppoudel/baltimore-crime/master/src/data/Baltimore-CrimeData.csv";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    csv(dataUrl).then(data => setData(data));
  }, []);
  console.log(data);
  return <HexagonMap data={data} />;
}

export default App;
