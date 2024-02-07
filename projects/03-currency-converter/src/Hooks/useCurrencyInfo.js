import React, { useEffect, useState } from "react";

export const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});
  let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => {
        setData(resp[currency]);
      });
  }, [currency]);

  return data;
};
