"use client"
import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import TextField from "@material-ui/core/TextField";
import styles from "@/app/styles/news.module.css";

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
  const filteredData = covidData.filter(item =>
    item.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.head}>
        COVID-19 <span> Cases </span> 
      </h2>
      <hr />
      <div className={styles.searchContainer}>
        <TextField
          label="Search by country..."
          variant="outlined"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      <div className={styles.chartContainer}>
        <BarChart
          width={800}
          height={400}
          data={filteredData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="country" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="cases" fill="#8884d8" />
          <Bar dataKey="deaths" fill="#82ca9d" />
          <Bar dataKey="recovered" fill="#ffc658" />
        </BarChart>
      </div>
    </div>
  );
}
