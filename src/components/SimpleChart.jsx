import React from "react";
import {
  BarChart,
  Bar,
  YAxis,
  XAxis,
  Tooltip,
  Legend,
  LineChart,
  Line
} from "recharts";

export const SimpleBarChart = ({ data, dataKey }) =>
  data ? (
    <BarChart width={800} height={600} data={data}>
      <YAxis />
      <XAxis />
      <Tooltip />
      <Legend
        formatter={renderCustomLegendText(
          "Distribution of sending rate within selected appID"
        )}
      />
      <Bar dataKey={dataKey} fill="#9acd32" />
    </BarChart>
  ) : (
    <span>Preparing chart data......</span>
  );

export const SimpleLineChart = ({ data, dataKey }) =>
  data ? (
    <LineChart width={800} height={400} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend
        formatter={renderCustomLegendText(
          "Distribution of average application sending rate across all appIDs"
        )}
      />
      <Line
        type="monotone"
        //dot={false}
        dataKey={dataKey}
        stroke="#4363d8"
        strokeWidth={3}
      />
    </LineChart>
  ) : (
    <span>Preparing chart data...</span>
  );

const renderCustomLegendText = customLabel => (value, entry) => {
  const { color } = entry;
  return <span style={{ color }}>{customLabel}</span>;
};
