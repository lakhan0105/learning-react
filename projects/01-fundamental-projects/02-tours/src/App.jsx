import { useEffect, useState } from "react";
import { Tours } from "./Tours";
const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTours = async () => {
    setIsLoading(true);
    const resp = await fetch(url);
    const data = await resp.json();
    setIsLoading(false);
    setTours(data);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const delCard = (eId) => {
    const newData = tours.filter((item) => eId !== item.id);
    setTours(newData);
  };

  if (isLoading) {
    return (
      <main>
        <h2>Loading...</h2>
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <h2>no tours left, please reload the page</h2>
      </main>
    );
  }

  return (
    <main>
      <h2>Our Tours</h2>
      <Tours tours={tours} delCard={delCard}></Tours>
    </main>
  );
}

export default App;
