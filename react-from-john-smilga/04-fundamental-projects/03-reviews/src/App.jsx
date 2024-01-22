import { useEffect, useState } from "react";
import { Review } from "./Review";
import data from "./data";

const App = () => {
  let [count, setCount] = useState(0);
  const { id, name, image, job, text } = data[count];

  function prevData() {
    if (count <= 0) {
      count = data.length - 1;
    } else {
      count = count - 1;
    }
    setCount(count);
  }

  function nextData() {
    if (count >= data.length - 1) {
      count = 0;
    } else {
      count = count + 1;
    }
    setCount(count);
  }

  console.log(data[count]);

  return (
    <main>
      <Review
        id={id}
        name={name}
        text={text}
        image={image}
        job={job}
        prevData={prevData}
        nextData={nextData}
      ></Review>
    </main>
  );
};
export default App;
