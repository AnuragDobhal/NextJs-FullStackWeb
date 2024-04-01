




"use client";
import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import TextField from "@material-ui/core/TextField";
import covidStyles from "@/app/styles/covid.module.css";

async function covidcaselistserver() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  let data = await fetch("https://disease.sh/v3/covid-19/countries");
  data = await data.json();
  return data;
}

export default function ProductServer() {
  const [covidData, setCovidData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [chartWidth, setChartWidth] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await covidcaselistserver();
      setCovidData(data);
    };
    fetchData();

    setChartWidth(window.innerWidth * 0.9); //graph size

    const handleResize = () => {
      //graph resize for small screen
      setChartWidth(window.innerWidth * 0.9);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter the data based on the search term
  const filteredData = covidData.filter((item) =>
    item.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Data for pie chart
  const pieChartData = [
    {
      name: "Cases",
      value: filteredData.reduce((acc, curr) => acc + curr.cases, 0),
    },
    {
      name: "Deaths",
      value: filteredData.reduce((acc, curr) => acc + curr.deaths, 0),
    },
    {
      name: "Recovered",
      value: filteredData.reduce((acc, curr) => acc + curr.recovered, 0),
    },
  ];

  const COLORS = ["#ff7802", "#ff0037", "#2b9309"];

  return (
    <div className={covidStyles.container}>
      <h2 className={covidStyles.head}>
        COVID-19 <span> Cases </span>
      </h2>

      <div className={covidStyles.searchContainer}>
        <TextField
          label="Search by country..."
          variant="outlined"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      <div className={covidStyles.chartContainer}>
        
        {/* Bar Chart */}
        <BarChart
          width={chartWidth}
          height={400} // Adjusted height
          data={filteredData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="country" />
          <YAxis />
          <Tooltip />
          <Legend formatter={(value) => value.charAt(0).toUpperCase() + value.slice(1)} />
          <Bar dataKey="cases" name="Cases" fill="#ff7802" />
          <Bar dataKey="deaths" name="Deaths" fill="#ff0037" />
          <Bar dataKey="recovered" name="Recovered" fill="#2b9309" />
        </BarChart>

        {/* Line Chart */}
        <LineChart
          width={chartWidth}
          height={400} // Adjusted height
          data={filteredData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="country" />
          <YAxis />
          <Tooltip />
          <Legend formatter={(value) => value.charAt(0).toUpperCase() + value.slice(1)} />
          <Line type="monotone" dataKey="cases" name="Cases" stroke="#ff7802" />
          <Line type="monotone" dataKey="deaths" name="Deaths" stroke="#ff0037" />
          <Line type="monotone" dataKey="recovered" name="Recovered" stroke="#2b9309" />
        </LineChart>

        {/* Pie Chart */}
        <PieChart width={chartWidth} height={400}>
          <Pie
            data={pieChartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            label
          >
            {pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend formatter={(value) => value.charAt(0).toUpperCase() + value.slice(1)} />
        </PieChart>
      </div>
    </div>
  );
}
