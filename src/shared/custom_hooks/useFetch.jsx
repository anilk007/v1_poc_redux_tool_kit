import React from 'react';
import { useEffect, useState } from "react";

import axios from 'axios';

const useFetch = (url, method, headers) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const fetchData = React.useCallback(() => {
    setLoading(true);
    axios({
      "method": method,
      "url": url,
      headers: headers
    })
      .then((response) => {
        console.log("response :");
        console.log(response);

        console.log("response.data :");
        console.log(response.data);
        setLoading(false);
        setResult(response.data)
      })
      .catch((error) => {
        console.log("error :")
        console.log(error)
        setLoading(false);
        setError(error);
      })
  },[url, method, headers])

  useEffect(() => {

    fetchData();
    
  }, [fetchData]);


  return {
    loading,
    error,
    result,
  };
};
export default useFetch;
