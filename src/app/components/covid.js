"use client";
import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import TextField from "@material-ui/core/TextField";
import covidStyles from "@/app/styles/covid.module.css"; // Import responsive CSS module

async function covidcaselistserver() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Delay for 2 seconds
  let data = await fetch("https://disease.sh/v3/covid-19/countries");
  data = await data.json();
  return data;
}

export default function ProductServer() {
  const [covidData, setCovidData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await covidcaselistserver();
      setCovidData(data);
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter the data based on the search term
  const filteredData = covidData.filter((item) =>
    item.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      <BarChart
  width={window.innerWidth * 0.9} // Adjusted to 90% of window width
  height={300} // Adjusted height
  data={filteredData}
  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
>
  <XAxis dataKey="country" />
  <YAxis />
  <Tooltip />
  <Bar dataKey="cases" fill="#ffa500" /> {/* Orange for total cases */}
  <Bar dataKey="deaths" fill="#ff0000" /> {/* Red for death cases */}
  <Bar dataKey="recovered" fill="#008000" /> {/* Green for recovered cases */}
</BarChart>

{/* Legend */}
<div className={covidStyles.legend}>
  <div className={covidStyles.legendItem}>
    <div className={covidStyles.legendSquare} style={{ backgroundColor: '#ffa500' }}></div>
    <span>Cases</span>
  </div>
  <div className={covidStyles.legendItem}>
    <div className={covidStyles.legendSquare} style={{ backgroundColor: '#ff0000' }}></div>
    <span>Deaths</span>
  </div>
  <div className={covidStyles.legendItem}>
    <div className={covidStyles.legendSquare} style={{ backgroundColor: '#008000' }}></div>
    <span>Recovered</span>
  </div>
</div>

      </div>
    </div>
  );
}
