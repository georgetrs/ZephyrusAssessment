import { useState, useEffect } from "react";
import { fetchData } from "../utils/fetchData";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      setLoading(true);
      try {
        const result = await fetchData(url);
        setData(result);
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchDataFromAPI();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
