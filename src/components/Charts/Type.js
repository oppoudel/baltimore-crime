import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

import { Segment, Header } from "semantic-ui-react";

export default function Chart({ data }) {
  return (
    <Segment>
      <Header as="h4" style={{ textAlign: "center" }}>
        Top Ten Crime Types
      </Header>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 15 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="Types"
            label={{
              value: "Crime Type",
              position: "bottom",
              offset: 0
            }}
          />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" />
          <Bar dataKey="inVRI" fill="#0080ff" minPointSize={5} />
          <Bar dataKey="outsideVRI" fill="#ff0080" minPointSize={10} />
        </BarChart>
      </ResponsiveContainer>
    </Segment>
  );
}
