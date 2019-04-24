import { csv } from 'd3-fetch';
import { getDay, getMonth, isWithinRange, parse } from 'date-fns';
import NProgress from 'nprogress';
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Grid, Loader, Segment } from 'semantic-ui-react';
import './App.css';
import CrimeSelection from './components/Selections/CrimeSelection';
import DateSelection from './components/Selections/DateSelection';
import DistrictSelection from './components/Selections/DistrictSelection';
import VRISelection from './components/Selections/VRISelection';
import TopMenu from './components/TopMenu/TopMenu';
import DataContext from './DataContext';
const Tables = lazy(() => import('./components/Tables/Tables'));
const Charts = lazy(() => import('./components/Charts/Charts'));
const ScatterplotMap = lazy(() => import('./components/Maps/ScatterplotMap'));
const HexagonMap = lazy(() => import('./components/Maps/HexagonMap'));

const dataUrl = './data/Baltimore_CrimeData.csv';
const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function App() {
  //initialize the state
  const [initData, setInitData] = useState([]);
  const [data, setData] = useState([]);

  // fetch the data from the csv
  // format the crime time
  // set the state initialized above
  useEffect(() => {
    NProgress.start();
    csv(dataUrl).then(data => {
      const formattedData = data.map(item => {
        const CDate = parse(item.CrimeDate);
        let hour = item.CrimeTime.split(':');
        if (+hour === +item.CrimeTime) {
          hour = item.CrimeTime.match(/\d\d/);
        }
        const CrimeHour = hour ? hour[0] : null;
        return {
          ...item,
          CrimeDate: CDate,
          Month: monthNames[getMonth(CDate)],
          Day: days[getDay(CDate)],
          CrimeHour
        };
      });
      setData(formattedData);
      setInitData(formattedData);
      NProgress.done();
    });
  }, []);

  //initialize the selections
  const [selection, setSelection] = useState([]);
  const [selectVRI, setSelectVRI] = useState([]);
  const [selectDistrict, setSelectDistrict] = useState([]);
  const [dates, setDates] = useState([]);

  //filter the data when any of the selections is updated
  useEffect(() => {
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
    if (selectDistrict.length >= 1) {
      updatedData = updatedData.reduce((acc, item) => {
        selectDistrict.forEach(sel => {
          if (item.District === sel) {
            acc.push(item);
          }
        });
        return acc;
      }, []);
    }
    const [startDate, endDate] = dates;
    if (startDate && endDate) {
      updatedData = updatedData.filter(item => isWithinRange(item.CrimeDate, startDate, endDate));
    }
    setData(updatedData);
  }, [initData, selection, selectVRI, selectDistrict, dates]);
  return (
    <Router>
      <DataContext.Provider value={data}>
        <TopMenu />
        <Grid divided stackable centered>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={6} computer={4} widescreen={3}>
              <Segment.Group>
                <CrimeSelection selected={selection} setSelection={setSelection} />
                <VRISelection selected={selectVRI} setVRISelection={setSelectVRI} />
                <DistrictSelection
                  selected={selectDistrict}
                  setDistrictSelection={setSelectDistrict}
                />
                <DateSelection onDateChange={setDates} />
              </Segment.Group>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={10} computer={12} widescreen={13}>
              <div className="main-container">
                <Suspense fallback={<Loader active />}>
                  <Route path="/" exact component={HexagonMap} />
                  <Route path="/map" component={ScatterplotMap} />
                  <Route path="/table" component={Tables} />
                  <Route path="/chart" component={Charts} />
                </Suspense>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </DataContext.Provider>
    </Router>
  );
}

export default App;
