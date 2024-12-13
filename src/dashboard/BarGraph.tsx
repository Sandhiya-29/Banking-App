import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
} from 'recharts';

interface BarGraphProps {
  data: Array<{ name: string; value: number }>;
}

const BarGraph: React.FC<BarGraphProps> = ({ data }) => {
  const transformedData = data.map((entry) =>
    entry.name === 'Deposits'
      ? { ...entry, value: -entry.value } 
      : entry
  );

  return (
    <BarChart width={500} height={300} data={transformedData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis tickFormatter={(value) => Math.abs(value).toString()} />
      <Tooltip formatter={(value) => Math.abs(Number(value))} />
      <Legend />
      <Bar dataKey="value" name="Amount" radius={[10, 10, 0, 0]} barSize={50}>
        {transformedData.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={entry.name === 'Deposits' ? 'lightgreen' : 'red'}
          />
        ))}
      </Bar>
    </BarChart>
  );
};

export default BarGraph;
