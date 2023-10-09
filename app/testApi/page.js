"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const api = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://dumbstockapi.com/stock?exchanges=NYSE"
        );

        setData(res.data);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    };
    fetchData();
    return () => {
      // Cancel Request
      // Clean ressource
    };
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <ul>
          {data && data.map((item) => <li key={item.ticker}>{item.name}</li>)}
        </ul>
      )}
    </div>
  );
};

export default api;
