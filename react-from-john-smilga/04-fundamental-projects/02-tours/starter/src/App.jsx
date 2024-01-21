const url = "https://course-api.com/react-tours-project";

import { Tours } from "./Tours";

const App = () => {
  return (
    <main>
      <h2 className="title">Tours</h2>

      {/* run the below code if the data is fetched successfully */}
      <Tours url={url}></Tours>
    </main>
  );
};

export default App;
