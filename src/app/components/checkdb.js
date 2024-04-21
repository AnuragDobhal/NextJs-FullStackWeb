// components/CheckMongoDB.js

import { useEffect, useState } from "react";

function CheckMongoDB() {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    async function checkMongoDB() {
      try {
        const response = await fetch("/api/checkMongoDB");
        const data = await response.json();
        setStatus(data.message);
      } catch (error) {
        console.error("Error checking MongoDB status:", error);
        setStatus("failed");
      }
    }

    checkMongoDB();
  }, []);

  return (
    <div>
      <h1>MongoDB Status:</h1>
      <p>{status === "loading" ? "Checking..." : status}</p>
    </div>
  );
}

export default CheckMongoDB;
