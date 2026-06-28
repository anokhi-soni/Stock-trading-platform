import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { watchlist } from '../data/data';

ChartJS.register(ArcElement, Tooltip, Legend);
    
 

export default function WatchListCharts({passedData}) {
  return <Doughnut data={passedData} />;
}
