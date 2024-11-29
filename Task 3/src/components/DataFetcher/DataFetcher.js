import React, { useState, useEffect } from "react";
import { fetchData } from "../../utils/fetchData";
import { filterData } from "../../utils/filterData";
import "./DataFetcher.module.css";

const DataFetcher = ({ searchTerm }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      setLoading(true);
      try {
        const result = await fetchData("https://jsonplaceholder.typicode.com/posts");
        setData(result);
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchDataFromAPI();
  }, []);

  const filteredData = filterData(data, searchTerm);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="data-list">
      {filteredData.length === 0 ? (
        <p>No results found</p>
      ) : (
        <ul>
          {filteredData.map((item) => (
            <li key={item.id} className="data-item">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataFetcher;
