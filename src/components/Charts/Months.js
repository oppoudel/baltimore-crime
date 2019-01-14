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
        Distribution of Crimes by Month of Year
      </Header>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 15 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="Month"
            label={{
              value: "Month",
              position: "bottom",
              offset: 0
            }}
          />
          <YAxis />
          <Tooltip />
          <Bar dataKey="Total" fill="#0080ff" minPointSize={10} />
        </BarChart>
      </ResponsiveContainer>
    </Segment>
  );
}
