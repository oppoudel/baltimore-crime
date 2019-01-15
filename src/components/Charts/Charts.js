import React from "react";
import { Grid } from "semantic-ui-react";
import {
  groupDataByType,
  groupDataByMonth,
  groupDataByDay,
  groupDataByCrimeHour
} from "../utils";
import Types from "./Type";
import Months from "./Months";
import Days from "./Day";
import Hours from "./Hour";

export default function Charts({ crimes }) {
  const hours = groupDataByCrimeHour(crimes);
  const types = groupDataByType(crimes);
  const months = groupDataByMonth(crimes);
  const days = groupDataByDay(crimes);
  return (
    <div>
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
    </div>
  );
}
