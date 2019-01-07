import React, { useState, useEffect } from "react";
import { csv } from "d3-fetch";
import parse from "date-fns/parse";
import NProgress from "nprogress";
import "./App.css";
import TopMenu from "./components/TopMenu/TopMenu";
import LeftMenu from "./components/LeftMenu/LeftMenu";
import HexagonMap from "./components/Maps/HexagonMap";
const dataUrl =
  "https://raw.githubusercontent.com/oppoudel/baltimore-crime/master/src/data/Baltimore-CrimeData.csv";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    NProgress.start();
    csv(dataUrl).then(data => {
      setData(
        data.map(item => ({
          ...item,
          CrimeDate: parse(item.CrimeDate)
        }))
      );
      NProgress.done();
    });
  }, []);
  return (
    <div>
      <TopMenu />
      <LeftMenu />
      <div className="main-container">{<HexagonMap data={data} />}</div>
    </div>
  );
}

export default App;
