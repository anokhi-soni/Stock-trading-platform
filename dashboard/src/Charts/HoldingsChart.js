import {
    Chart as ChartJS, CategoryScale,
    LinearScale, BarElement,
    Title, Tooltip, Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';;

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

// Import this HoldingsChart component inside that file/component where you wanna display the chart
export default function HoldingsChart({passedData}) { // we'll pass the Holdings data here
  return <Bar options={options} data={passedData} />;
}
