import React, { useState } from "react";
import { useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/ChartsContainer";
import { BarChart, AreaChart } from "./index";

function ChartsContainer() {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplications: data } = useSelector(
    (store) => store.allJobsState
  );

  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type="button" onClick={() => setBarChart(!barChart)}>
        {barChart ? "area chart" : "bar chart"}
      </button>

      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </Wrapper>
  );
}

export default ChartsContainer;
