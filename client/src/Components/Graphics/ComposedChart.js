import React, { PureComponent } from 'react';
import {
  ComposedChart, Line,Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

  const data = [
    {
      name: "Telefónica",
      reputation: 590
    },
    {
      name: "Deloitte",
      reputation: 868
    },
    {
      name: "KPMG",
      reputation: 1397
    },
    {
      name: "Renfe",
      reputation: 1480
    },
    {
      name: "MS",
      reputation: 1520
    }
  ];
  
  export default function BarChart({colorBarra,colorLinea}) {
    return (
      <ComposedChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" scale="band" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="reputation" barSize={25} fill={colorBarra} />
        <Line type="monotone" dataKey="reputation" stroke={colorLinea} />
      </ComposedChart>
    );
  }
  