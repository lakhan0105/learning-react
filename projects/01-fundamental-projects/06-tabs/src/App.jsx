import { useEffect, useState } from "react";
import { BtnsCont } from "./BtnsCont";
import { Tab } from "./Tab";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tabsData, setTabsData] = useState([]);
  const [currItem, setCurrItem] = useState(0);

  const fetchData = async () => {
    setIsLoading(true);
    const resp = await fetch(url);
    const result = await resp.json();
    setTabsData(result);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <div className="container">
          <BtnsCont
            tabsData={tabsData}
            currItem={currItem}
            setCurrItem={setCurrItem}
          ></BtnsCont>

          <Tab tabsData={tabsData} currItem={currItem}></Tab>
        </div>
      )}
    </main>
  );
}

export default App;
