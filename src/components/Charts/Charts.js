import React, { useContext } from "react";
import { Grid, Loader } from "semantic-ui-react";
import DataContext from "../../DataContext";
import {
  groupDataByCrimeHour,
  groupDataByDay,
  groupDataByMonth,
  groupDataByType
} from "../utils";
import Days from "./Day";
import Hours from "./Hour";
import Months from "./Months";
import Types from "./Type";

export default function Charts() {
  const crimes = useContext(DataContext);
  const hours = groupDataByCrimeHour(crimes);
  const types = groupDataByType(crimes);
  const months = groupDataByMonth(crimes);
  const days = groupDataByDay(crimes);
  return (
    <div>
      {crimes.length > 1 ? (
        <>
          <Hours data={hours} />
          <Grid stackable centered columns={2}>
            <Grid.Column>
              <Days data={days} />
            </Grid.Column>
            <Grid.Column>
              <Months data={months} />
            </Grid.Column>
          </Grid>
          <Types data={types} />
        </>
      ) : (
        <Loader active />
      )}
    </div>
  );
}
