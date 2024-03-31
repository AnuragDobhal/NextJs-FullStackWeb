import React from "react";
import Covidcase from "../components/covid";

async function covidcaselistserver() {
  try {
    const response = await fetch("https://disease.sh/v3/covid-19/countries");
    const data = await response.json();
    // console.log("Fetched data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; 
  }
}
export default function ServerComponent() { 
  const data = covidcaselistserver();   

  return (
    <div>
      <h1>Data fetched on the server side:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <Covidcase data={data} />
    </div>
  );
}
