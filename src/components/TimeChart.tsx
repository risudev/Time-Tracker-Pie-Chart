import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJs,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js'

ChartJs.register(ArcElement, Tooltip, Legend);

interface Props {
    data: { activity: string; hours: number; color: string }[]
}

const TimeChart = ({ data }: Props) => {

    const chartData = {
        labels: data.map((d) => d.activity),
        datasets: [
            {
                label: "Hours",
                data: data.map((d) => d.hours),
                backgroundColor: data.map((d) => d.color),
                borderWidth: 2,
                borderColor: '#ffffff',
            }
        ]
    }
    return (
        <div className="bg-white p-4 rounded shadow text-black">
        <h3 className="font-semibold mb-2">📊 Activity Chart</h3>
        <Pie data={chartData} />
        </div>
    )
        
        
};

export default TimeChart;