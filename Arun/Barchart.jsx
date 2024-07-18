import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Barchart = () => {
  const data = [
    {
      name: "01 Jul",
      last7days: 268,
      lastweek: 210,
      amt: 2400,
    },
    {
      name: "02 Jul",
      last7days: 210,
      lastweek: 239,
      amt: 2210,
    },
    {
      name: "03 Jul",
      last7days: 210,
      lastweek: 120,
      amt: 2290,
    },
    {
      name: "04 Jul",
      last7days: 178,
      lastweek: 220,
      amt: 2000,
    },
    {
      name: "05 Jul",
      last7days: 189,
      lastweek: 230,
      amt: 2181,
    },
    {
      name: "06 Jul",
      last7days: 289,
      lastweek: 170,
      amt: 2500,
    },
    {
      name: "07 Jul",
      last7days: 230,
      lastweek: 140,
      amt: 2100,
    },
  ];
  return (
    <div>
      <BarChart width={400} height={200} data={data}>
        <CartesianGrid strokeDasharray="2 2" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="last7days" barSize={5 / 1} fill="#7EA1FF" />
        <Bar dataKey="lastweek" barSize={5 / 1} fill="#898989" />
      </BarChart>
    </div>
  );
};

export default Barchart;
