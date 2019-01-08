import React, { useState, useEffect } from "react";
import { csv } from "d3-fetch";
import parse from "date-fns/parse";
import NProgress from "nprogress";
import { isWithinRange } from "date-fns";
import { Grid, Button, Segment } from "semantic-ui-react";
import "./App.css";
import TopMenu from "./components/TopMenu/TopMenu";
import ScatterplotMap from "./components/Maps/ScatterplotMap";
import CrimeSelection from "./components/Selections/CrimeSelection";
import DateSelection from "./components/Selections/DateSelection";
import VRISelection from "./components/Selections/VRISelection";
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
  const [dates, setDates] = useState([]);
  const [selectVRI, setSelectVRI] = useState([]);

  const handleSubmit = () => {
    let updatedData = initData;
    if (selection.length >= 1) {
      updatedData = updatedData.reduce((acc, item) => {
        selection.forEach(sel => {
          if (item.Descriptio === sel) {
            acc.push(item);
          }
        });
        return acc;
      }, []);
    }
    if (selectVRI.length >= 1) {
      updatedData = updatedData.reduce((acc, item) => {
        selectVRI.forEach(sel => {
          if (item.VRI === sel) {
            acc.push(item);
          }
        });
        return acc;
      }, []);
    }
    if (dates.length === 2) {
      const [startDate, endDate] = dates;
      updatedData = data.filter(item =>
        isWithinRange(item.CrimeDate, startDate, endDate)
      );
    }
    setData(updatedData);
  };
  return (
    <div>
      <TopMenu data={data} />
      <Grid divided stackable centered>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={6} computer={4} widescreen={3}>
            <CrimeSelection selected={selection} setSelection={setSelection} />
            <VRISelection selected={selectVRI} setVRISelection={setSelectVRI} />
            <DateSelection onDateChange={setDates} />
            <Segment>
              <Button primary fluid onClick={handleSubmit}>
                Submit
              </Button>
            </Segment>
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
