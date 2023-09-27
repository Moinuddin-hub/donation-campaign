import { useEffect, useState } from 'react';
import { PieChart, Pie,  Tooltip,Cell } from 'recharts';

const Statistics = () => {
   const [statistics ,setStatistics]=useState(0);


   useEffect(()=>{
    const donationItem=JSON.parse(localStorage.getItem('donation'));
    setStatistics(donationItem);

   },[])
   const x=statistics.length;
      //  console.log(x);
    const data = [
    
        { name: 'Group A', value: x }, 
        { name: 'Group B', value: 12-x },
       
      ];
      
      const COLORS = ['#FF444A', '#00C49F'];
    
      const RADIAN = Math.PI/ 180;
      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };
      

          return (
         
             <div className='flex justify-center flex-col ml-24'>
                 <PieChart width={500} height={500}>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
              <div>
               <img src='https://i.ibb.co/qFgjNND/Group-39500.png'/>
              </div>
             </div>
    );
                  
              
};

export default Statistics;
// import React from 'react';
// import { Pie } from 'react-chartjs-2';

// const data = {
//   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//   datasets: [
//     {
//       data: [12, 19, 3, 5, 2, 3], // Example data values
//       backgroundColor: [
//         '#FF6384',
//         '#36A2EB',
//         '#FFCE56',
//         '#2E7D32',
//         '#7B1FA2',
//         '#FF5722'
//       ],
//       hoverBackgroundColor: [
//         '#FF6384',
//         '#36A2EB',
//         '#FFCE56',
//         '#2E7D32',
//         '#7B1FA2',
//         '#FF5722'
//       ]
//     }
//   ]
// };
// function PieChart() {
//   return (
//     <div>
//       <h2>Pie Chart Example</h2>
//       <Pie data={data} />
//     </div>
//   );
// }

// export default PieChart;
