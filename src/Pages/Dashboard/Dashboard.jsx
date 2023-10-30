import React from "react";
import Layout from '../../Layout/Layout'
import DashboardHeader from "../../Layout/DashboardHeader";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
const data = {
    labels: ['Ongoing Orders', 'Completed Orders'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

export default function Dashboard() {
  
  
return (
    <Layout>
        <div className= "grid grid-rows-3 grid-flow-col gap-[20px] rounded-[20px] bg-white w-full h-full "> 
            <div className="row-span-1 bg-babyBlue p-4 rounded-[20px] ">
                <DashboardHeader/>
                <div className="grid grid-cols-4 gap-[12px] p-[10px] h-[70px]">
                    <div className="col-span-1 border-navyBlue border-[1px] rounded-[10px]">
                        {''}
                    </div>
                    <div className="col-span-1 border-navyBlue border-[1px] rounded-[10px]">
                        {''}
                    </div>
                    <div className="col-span-1 border-navyBlue border-[1px] rounded-[10px]">
                        {''}
                    </div>
                    <div className="col-span-1 border-navyBlue bg-navyBlue border-[1px] rounded-[10px]">
                        {''}
                    </div>
                </div>
            </div>
            <div className="row-span-2">
                <div className="grid grid-cols-2">
                    <div className="col-span-1 border-navyBlue border-[1px] rounded-[20px] mx-2">
                        <Doughnut data={data}/>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
);
}
