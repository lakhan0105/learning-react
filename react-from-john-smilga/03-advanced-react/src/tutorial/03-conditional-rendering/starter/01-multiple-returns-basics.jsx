import { useEffect, useState } from "react";

// conditional rendering
const MultipleReturnsBasics = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // done fetching the data
      setLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return <h2>Multiple Returns Basics</h2>;
};
export default MultipleReturnsBasics;
