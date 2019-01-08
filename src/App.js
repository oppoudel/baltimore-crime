import React, { useState, useEffect } from "react";
import { csv } from "d3-fetch";
import parse from "date-fns/parse";
import NProgress from "nprogress";
import "./App.css";
import TopMenu from "./components/TopMenu/TopMenu";
import HexagonMap from "./components/Maps/HexagonMap";
import CrimeSelection from "./components/Selections/CrimeSelection";
import { Grid } from "semantic-ui-react";
import SelectDates from "./components/Selections/SelectDates";
const dataUrl =
  "https://raw.githubusercontent.com/oppoudel/baltimore-crime/master/src/data/Baltimore-CrimeData.csv";

function App() {
  const [initData, setInitData] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    NProgress.start();
    csv(dataUrl).then(data => {
      setData(data);
      setInitData(
        data.map(item => ({
          ...item,
          CrimeDate: parse(item.CrimeDate)
        }))
      );
      NProgress.done();
    });
  }, []);

  const [selection, setSelection] = useState([]);
  useEffect(
    () => {
      let updatedData = initData.reduce((acc, item) => {
        selection.forEach(sel => {
          if (item.Description === sel) {
            acc.push(item);
          }
        });
        return acc;
      }, []);
      if (updatedData.length < 1) {
        setData(initData);
      } else {
        setData(updatedData);
      }
    },
    [selection]
  );
  return (
    <div>
      <TopMenu data={data} />
      <Grid divided stackable centered>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={8} computer={5} widescreen={4}>
            <CrimeSelection selected={selection} setSelection={setSelection} />
            <SelectDates />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={11} widescreen={12}>
            <div className="main-container">{<HexagonMap data={data} />}</div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default App;
