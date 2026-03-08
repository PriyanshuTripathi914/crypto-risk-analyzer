import React from "react";
import { Line } from "react-chartjs-2";
import {
Chart as ChartJS,
LineElement,
CategoryScale,
LinearScale,
PointElement,
Tooltip,
Legend
} from "chart.js";

import zoomPlugin from "chartjs-plugin-zoom";

ChartJS.register(
LineElement,
CategoryScale,
LinearScale,
PointElement,
Tooltip,
Legend,
zoomPlugin
);

function StockChart({ prices }) {
  const filteredPrices = prices.filter((_, i) => i % 10 === 0);
  const movingAverage = filteredPrices.map((_, index, arr) => {
    const window = arr.slice(Math.max(index - 4, 0), index + 1);
    const avg = window.reduce((a,b)=>a+b,0) / window.length;
    return avg;
  });

  const labels = filteredPrices.map((_,i)=>`Day ${i*10+1}`);

  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: filteredPrices,
        borderColor: "#1f77b4",
        backgroundColor: "rgba(31,119,180,0.15)",
        tension:0.35,
        pointRadius:2,
        fill:true
      },
      {
        label: "Moving Avg",
        data: movingAverage,
        borderColor:"#ff7f0e",
        tension:0.35,
        pointRadius:0
      }
    ]
  };

  const options = {

    responsive:true,

    interaction:{
      mode:"index",
      intersect:false
    },

    plugins:{
      legend:{
        position:"top"
      },

      tooltip:{
        callbacks:{
          label:(context)=>{
            return `${context.dataset.label}: $${context.raw.toFixed(2)}`
          }
        }
      },

      zoom:{
        pan:{
          enabled:true,
          mode:"x"
        },
        zoom:{
          wheel:{
            enabled:true
          },
          pinch:{
            enabled:true
          },
          mode:"x"
        }
      }

    },

    scales:{
      x:{
        ticks:{
          maxTicksLimit:10
        }
      }
    }

  };

  return <Line data={data} options={options} />;
}

export default StockChart;