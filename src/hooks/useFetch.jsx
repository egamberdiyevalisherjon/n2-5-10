import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let unmounted = false;

    (async function () {
      try {
        setLoading(true);
        const { data } = await axios.get(url);
        if (unmounted) return;
        setLoading(false);
        setData(data);
      } catch (error) {
        if (unmounted) return;
        setIsError(true);
        setError(error);
      }
    })();

    return () => {
      unmounted = true;
    };
  }, [setData, setLoading, setIsError, setError]);

  return [data, loading, isError, error];
}

export default useFetch;
