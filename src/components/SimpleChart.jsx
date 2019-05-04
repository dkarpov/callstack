import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  YAxis,
  Tooltip,
  Legend,
  LineChart,
  Line
} from "recharts";

export const SimpleBarChart = ({ data }) =>
  data ? (
    <BarChart width={600} height={400} data={data}>
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="meanSendingRateKbps" fill="#8884d8" />
    </BarChart>
  ) : (
    <span>Loading...</span>
  );

export const SimpleLineChart = ({ data }) =>
  data ? (
    <LineChart width={600} height={400} data={data}>
      <Line
        type="monotone"
        dot={false}
        dataKey="pv"
        stroke="#8884d8"
        strokeWidth={2}
      />
    </LineChart>
  ) : (
    <span>Loading...</span>
  );
