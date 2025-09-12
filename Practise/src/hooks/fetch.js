import { useState, useEffect } from "react";

function usefetch(url) {
  const [data, setData] = useState(null);
  const [err, setError] = useState("");
  const [loading, setLoading] = useState(true);

  async function fetchApi() {
    try {
      if (!url) return;
      setLoading(true);
      const response = await fetch(url);
      const res = await response.json();
      setData(res);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  
  useEffect(()=>{
    fetchApi()
  },[url])

  return {data, loading , err}
}


export default usefetch