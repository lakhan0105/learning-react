import { useState } from "react";
import data from "./data";
import { useEffect } from "react";

const App = () => {
  // set state
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data);
  }, []);

  // Function to filter the items on their categories
  function filterItems(category) {
    return data.filter((item) => {
      if (item.category === category) {
        return item;
      }
    });
  }

  // Function to create filter btns
  const filterBtns = data.reduce(
    (acc, curr) => {
      if (!acc.includes(curr.category)) {
        acc.push(curr.category);
      }
      return acc;
    },
    ["all"]
  );

  // display items when btn clicked
  function displayFilteredItems(categoryName) {
    if (categoryName === "all") {
      setItems(data);
    } else {
      const newItems = filterItems(categoryName);
      setItems(newItems);
    }
  }

  return (
    <div className="menu">
      <div className="btn-container">
        {filterBtns.map((btn) => {
          return (
            <button
              className="btn"
              key={btn}
              onClick={() => {
                displayFilteredItems(btn);
              }}
            >
              {btn}
            </button>
          );
        })}
      </div>

      <section className="section-center">
        {items.map((item) => {
          const { id, title, price, img, desc } = item;

          return (
            <article className="menu-item" key={id}>
              <img className="img" src={img} alt={title} />
              <div className="item-info">
                <header>
                  <h5>{title}</h5>
                  <p className="item-price">{price}</p>
                </header>
                <p className="item-text">{desc}</p>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
};
export default App;
