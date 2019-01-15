import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

import { Segment, Header } from "semantic-ui-react";

export default function Chart({ data }) {
  return (
    <Segment>
      <Header as="h4" style={{ textAlign: "center" }}>
        Distribution of Crimes by Day of a Week
      </Header>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 15 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="Day"
            label={{
              value: "Day of Week",
              position: "bottom",
              offset: 0
            }}
          />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="Total"
            fill="#8884d8"
            minPointSize={10}
            onClick={(d, i) => console.log(d, i)}
          />
        </BarChart>
      </ResponsiveContainer>
    </Segment>
  );
}
