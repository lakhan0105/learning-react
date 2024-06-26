import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showStats } from "../features/allJobs/allJobsSlice";
import { ChartsContainer, StatsContainer } from "../components/index";

function Stats() {
  const { isLoading, monthlyApplications } = useSelector(
    (store) => store.allJobsState
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showStats());
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
}

export default Stats;
