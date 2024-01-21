import React, { useEffect } from "react";
import { useState } from "react";
import { Refresh } from "./Refresh";

export const Tours = (props) => {
  const [tours, setTours] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [isEmpty, setisEmpty] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(props.url);
        const data = await resp.json();
        setTours(data);
      } catch (error) {
        console.log(error);
      }
      setisLoading(false);
    };

    fetchData();
  }, []);

  function removeItem(e) {
    const eId = e.target.dataset.id;
    const filteredTours = tours.filter((obj) => {
      if (obj.id !== eId) {
        return obj;
      }
    });
    setTours(filteredTours);

    if (filteredTours.length < 1) {
      setisEmpty(true);
    }
  }

  return (
    <section className="tours">
      {!isLoading && (
        <>
          {tours.map((item) => {
            // Destructuring
            const { id, name, price, info, image } = item;

            return (
              <article className="single-tour" key={id}>
                <img className="img" src={image} alt={name} />
                <div className="tour-info">
                  <h5>{name}</h5>
                  <p>{info}</p>
                </div>
                <button
                  className="btn delete-btn"
                  data-id={id}
                  onClick={removeItem}
                >
                  not interested
                </button>
              </article>
            );
          })}
        </>
      )}

      {isLoading && <h2>Loading...</h2>}
      {console.log(tours)}

      {isEmpty && <Refresh></Refresh>}
    </section>
  );
};
