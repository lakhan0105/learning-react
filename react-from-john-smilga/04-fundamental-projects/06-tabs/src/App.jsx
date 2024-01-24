import { useEffect } from "react";
import { useState } from "react";
import { JobInfo } from "./JobInfo";
import { BtnCont } from "./BtnCont";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currItem, setCurrItem] = useState(0);

  const fetchJobs = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    setJobs(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }

  // console.log(jobs);

  return (
    <section className="jobs-center">
      {/* btns container */}
      <BtnCont
        jobs={jobs}
        currItem={currItem}
        setCurrItem={setCurrItem}
      ></BtnCont>
      {/* job info */}
      <JobInfo jobs={jobs} currItem={currItem}></JobInfo>
    </section>
  );
};

export default App;
