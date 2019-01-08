import React, { useState, useEffect } from "react";
import { csv } from "d3-fetch";
import parse from "date-fns/parse";
import NProgress from "nprogress";
import "./App.css";
import TopMenu from "./components/TopMenu/TopMenu";
import ScatterplotMap from "./components/Maps/ScatterplotMap";
import CrimeSelection from "./components/Selections/CrimeSelection";
import { Grid } from "semantic-ui-react";
import DateSelection from "./components/Selections/DateSelection";
import { isWithinRange } from "date-fns";
const dataUrl =
  "https://raw.githubusercontent.com/oppoudel/baltimore-crime/master/src/data/Baltimore_CrimeData.csv";

function App() {
  const [initData, setInitData] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    NProgress.start();
    csv(dataUrl).then(data => {
      const formattedData = data.map(item => ({
        ...item,
        CrimeDate: parse(item.CrimeDate)
      }));
      setData(formattedData);
      setInitData(formattedData);
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
      if (selection.length < 1) {
        setData(initData);
      } else {
        setData(updatedData);
      }
    },
    [selection]
  );
  const [dates, setDates] = useState([]);
  useEffect(
    () => {
      const [startDate, endDate] = dates;
      const updatedData = data.filter(item =>
        isWithinRange(item.CrimeDate, startDate, endDate)
      );
      setData(updatedData);
    },
    [dates]
  );

  return (
    <div>
      <TopMenu data={data} />
      <Grid divided stackable centered>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={6} computer={4} widescreen={3}>
            <CrimeSelection selected={selection} setSelection={setSelection} />
            <DateSelection onDateChange={setDates} />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={10} computer={12} widescreen={13}>
            <div className="main-container">
              {<ScatterplotMap data={data} />}
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default App;
