import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment'; // Ensure moment.js is installed
import ApexChart from "apexcharts";
import Chart from "react-apexcharts";
import NavBarProfile from './NavBarProfile';

const API_URL = 'https://api.thingspeak.com/channels/2349053/feeds.json';
const API_KEY = '0H5Z4Y2DMQCL7ULK'; // Replace with your API key
const RESULTS = 2; // Number of data points to fetch

const ReadData = () => {
  // Use the spread operator to initialize dataStream with an object
  const [pauseData, setPauseData] = useState(false);
  const [dataStream, setDataStream] = useState([]); // Initialize with empty array

  const series = [
    {
      name: "Voltage",
      data: [], // Initially empty data
    },
  ];

  const options = {
    chart: {
      id: 'realtime',
      type: 'line',
      zoom: {
        enabled: true,
        type: 'x',
        autoScaleYaxis: true,
      },
    },
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: 'smooth',
    },
    title: {
      text: "Voltage vs time",
      align: 'left',
    },
    xaxis: {
      type: 'datetime',
      tickAmount: 'dataPoints', // Show ticks for all data points
      labels: {
        show:false,
        formatter: function (val) {
          return moment(val).format('HH:mm:ss'); // Format x-axis labels as HH:MM:SS
        },
      },
      
    },
    yaxis: {
      min: -6,
      max: 6,
    },
    tooltip: {
      x: {
        formatter: function (val) {
          return moment(val).format('HH:mm:ss'); // Format tooltip x-axis as HH:MM:SS
        },
      },
    },
  };

  const appendData = async (dataPoint) => {
    const currentTimestamp = moment();
    const newX = currentTimestamp.valueOf(); // Convert timestamp to milliseconds for x-axis
    const randomY = Math.random() * 3 - 1.5;
    const roundedY=randomY.toFixed(2);
    const newY=roundedY+dataPoint;

    setDataStream([...dataStream, { x: newX, y: newY }]);
    // series[0].data = dataStream.map((point) => ({ x: point.x, y: point.y })); // Update series data
    ApexChart.exec('realtime', 'updateSeries', [{ data: dataStream }]);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}?api_key=${API_KEY}&results=${RESULTS}`);
        const fetchedData = response.data.feeds[0];
        const y = fetchedData.field1;
        console.log(y);

        appendData(y); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (!pauseData) {
      setTimeout(fetchData, 1000);
    }

    return () => clearTimeout(); // Clear any remaining timeout on component unmount
  }, [dataStream, pauseData]);

  const handlePauseResume = () => {
    setPauseData(!pauseData);
  };

  return (
  <>
   <NavBarProfile />
    <div>
      <Chart series={series} options={options} height={400} style ={{padding : "1.5rem"}}  />
      <button style ={{display : "flex", alignItems: "center", justifyContent: "center", marginLeft : "2rem", marginBottom : "2rem"}}onClick={handlePauseResume}>Pause/Resume</button>
    </div>

    </>


  );
};

export default ReadData;