import { useState, useEffect, useMemo } from "react";

const useFetch = (fetchFunction) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refetchCount, setRefetchCount] = useState(0); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetchFunction();
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchFunction, refetchCount]); 

  const refetch = () => {
    setRefetchCount(prevCount => prevCount + 1);
  };

  const memoizedResult = useMemo(() => ({
    data,
    loading,
    error,
    refetch
  }), [data, loading, error, refetch]);

  return memoizedResult;
};

export default useFetch;
