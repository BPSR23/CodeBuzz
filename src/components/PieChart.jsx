import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { useAppContext } from "../AppContext";



export default function Graph () {
  let leetcode_res=null
  let codeforces_res=null
  
  const  {data}  = useAppContext();
  if(data){
    leetcode_res=data.leetcode;
    codeforces_res=data.codeforces;
    console.log("dsadasd",data.leetcode)
   }
   console.log(data)
  
const var1 = leetcode_res && leetcode_res.total_problems_submitted
const var2 = leetcode_res && leetcode_res.easy_problems_submitted
const var3 = codeforces_res && codeforces_res.medium_problems_submitted
const var4 = leetcode_res && leetcode_res.status
console.log(var1, var2, var3, var4)

const data1 = [
  { name: 'HackerRank', value: parseInt(var1) },
  { name: 'Group B', value: parseInt(var2) },
  { name: 'Group C', value: 0 },
  { name: 'Group D', value: 0 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
      <PieChart width={400} height={300} >
        <Pie
          data={data1}
          cx={200}
          innerRadius={70}
          outerRadius={90}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data1.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        
      </PieChart>
      
    );
}

