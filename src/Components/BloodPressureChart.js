import React from "react";
import { Line } from 'react-chartjs-2';
import { Chart as Chartjs, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement, plugins } from 'chart.js';

Chartjs.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

export default function BloodPressureChart({bloodPressureData}){
    const labels = bloodPressureData.map(data => data.month)
    const systolicValues = bloodPressureData.map(data => data.systolic)
    const diastolicValues = bloodPressureData.map(data => data.diastolic)

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Systolic',
                data: systolicValues,
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2, 
                fill: false
            },

            {
                label: 'Diastolic',
                data: diastolicValues,
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2, 
                fill: false
            }
        ]
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Blood Pressure',
                font: {
                    size: 20
                }
            }
        },
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: false
            }

        }
    };

    return(
        <Line data={chartData} options={chartOptions}></Line>
    )
}