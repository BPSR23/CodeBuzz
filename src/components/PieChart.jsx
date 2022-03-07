import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const Val = {
  "total_problems_submitted": "23",
}
console.log({Val})
const data = [
  { name: 'HackerRank', value: 5},
  { name: 'Group B', value: 6 },
  { name: 'Group C', value: 2 },
  { name: 'Group D', value: 6 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default class Graph extends PureComponent {
  render() {
    return (
      <PieChart width={400} height={300} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={200}
          innerRadius={70}
          outerRadius={90}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        
      </PieChart>
      
    );
  }
}
