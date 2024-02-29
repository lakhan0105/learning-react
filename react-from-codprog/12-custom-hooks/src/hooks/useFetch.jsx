import { useEffect } from "react";
import { useState } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsPending(true);

    const controller = new AbortController();
    async function fetchData() {
      try {
        const resp = await fetch(url, { signal: controller.signal });
        if (!resp.ok) {
          throw Error("somehing went wrong");
        }
        const respData = await resp.json();
        setData(respData);
        setIsPending(false);
        setIsError(false);
      } catch (error) {
        console.dir(error);
        setIsError(error.message);
        setIsPending(false);
      }
    }
    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data: data, isPending, isError };
}

export default useFetch;
