import { useEffect, useState } from "react";
import data from "../data";
import { FilterBtnsCont } from "./FilterBtnsCont";
import { ItemsCont } from "./ItemsCont";

function App() {
  const [menuData, setMenuData] = useState(data);

  // create btns
  const btns = ["all", ...new Set(data.map((item) => item.category))];

  // Function to display items acc to btn
  function dispFiltItems(categoryName) {
    const newItems = data.filter((item) => {
      if (item.category === categoryName) {
        return item;
      }
    });

    if (categoryName === "all") {
      setMenuData(data);
    } else {
      setMenuData(newItems);
    }
  }

  return (
    <main>
      <h2 className="page-heading">Our Menu</h2>

      <FilterBtnsCont
        btns={btns}
        dispFiltItems={dispFiltItems}
      ></FilterBtnsCont>

      <ItemsCont menuData={menuData}></ItemsCont>
    </main>
  );
}

export default App;
