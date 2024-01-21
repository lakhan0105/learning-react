import { useEffect } from "react";
import { useState } from "react";
import { Loading } from "./Loading";
import { Tours } from "./Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((item) => {
      if (item.id !== id) {
        return item;
      }
    });

    setTours(newTours);
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setTours(data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading></Loading>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </main>
  );
};
export default App;
