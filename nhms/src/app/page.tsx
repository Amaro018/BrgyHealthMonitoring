"use client";


import dynamic from 'next/dynamic';
import 'chart.js/auto';

export default function Home() {



  const Bar = dynamic(() => import('react-chartjs-2').then((mod) => mod.Bar), {
    ssr: false,
  });
  const data = {
    labels: ['Malnourished', 'Normal', 'Obese'],
    datasets: [
      {
        label: 'GeeksforGeeks Bar Chart',
        data: [12, 19, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <main className=' '>
      <div className='flex justify-center'>
        <div style={{ width: '700px', height: '700px' }}>
            <h1>Example 2: Bar Chart</h1>
            <Bar data={data} />
        </div>
      </div>
    </main>
  );


}

