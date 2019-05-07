import React from "react";
import {
  BarChart,
  Bar,
  YAxis,
  XAxis,
  Tooltip,
  Legend,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from "recharts";

const colors = [];

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

export const SimplePiechart = ({ data, dataKey }) => {
  const colors = getRandomColor(data && data.length);

  return data ? (
    <PieChart width={800} height={400}>
      <Pie
        data={data}
        dataKey={dataKey}
        cx={500}
        cy={200}
        innerRadius={100}
        outerRadius={200}
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  ) : (
    <span>Preparing chart data...</span>
  );
};

const renderCustomLegendText = customLabel => (value, entry) => {
  const { color } = entry;
  return <span style={{ color }}>{customLabel}</span>;
};

const CustomizedLabel = ({ x, y, stroke, value }) => (
  <g transform={`translate(${x},${y})`}>
    <text
      x={0}
      y={0}
      dy={16}
      textAnchor="end"
      fill="#666"
      transform="rotate(-35)"
    >
      {value}
    </text>
  </g>
);

const getRandomColor = (quantity = 1) => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < quantity; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
