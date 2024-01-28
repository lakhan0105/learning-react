import { CardsCont } from "./CardsCont";
import { list } from "./data";
import { useState } from "react";

function App() {
  const [reviews, setReviews] = useState(list);
  const [currItem, setCurrItem] = useState(0);

  const nextItem = () => {
    if (currItem >= reviews.length - 1) {
      setCurrItem(0);
    } else {
      setCurrItem((prev) => {
        return prev + 1;
      });
    }
  };

  const prevItem = () => {
    if (currItem === 0) {
      setCurrItem(reviews.length - 1);
    } else {
      setCurrItem((prev) => {
        return prev - 1;
      });
    }
  };

  return (
    <main>
      <CardsCont
        reviews={reviews}
        currItem={currItem}
        setCurrItem={setCurrItem}
        nextItem={nextItem}
        prevItem={prevItem}
      ></CardsCont>
    </main>
  );
}

export default App;
