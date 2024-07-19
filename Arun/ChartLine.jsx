import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
export default function ChartLine() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(myChartRef, {
      type: "line",
      data: {
        labels: [1, 5, 10, 15, 20, 25, 30],
        datasets: [
          {
            label: "Current Month",
            data: [650, 340, 650, 340, 560, 456, 456],
            fill: false,
            borderColor: "#7EA1FF",
            borderWidth: 2,
          },
          {
            label: "Provisions Month",
            data: [389, 476, 238, 373, 545, 303, 273],
            fill: false,
            borderColor: "#898989",
            borderWidth: 2,
          },
        ],
      },
    });
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);
  return (
    <div className="w-100">
      <canvas ref={chartRef} style={{ width: "100%" }} />
    </div>
  );
}

// export default ChartLine;
