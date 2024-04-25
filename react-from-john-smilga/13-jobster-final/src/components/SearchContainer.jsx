import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/SearchContainer";
import { FormRow, FormRowSelect } from "../components/index";
import { clearFilters, handleChange } from "../features/allJobs/allJobsSlice";

function SearchContainer() {
  const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
    useSelector((store) => store.allJobsState);

  const { jobTypeOptions, statusOptions } = useSelector(
    (store) => store.jobState
  );

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ key, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearFilters());
  };

  return (
    <Wrapper>
      <form className="form">
        <h4>search form</h4>
        <div className="form-center">
          <FormRow
            name={"search"}
            type={"text"}
            value={search}
            handleChange={handleSearch}
          />

          {/* search by status */}
          <FormRowSelect
            labelText={"search status"}
            name={"searchStatus"}
            value={searchStatus}
            handleChange={handleSearch}
            list={["all", ...statusOptions]}
          />

          {/* search by job type */}
          <FormRowSelect
            labelText={"job type"}
            name={"jobType"}
            value={searchType}
            handleChange={handleSearch}
            list={["all", ...jobTypeOptions]}
          />

          {/* sort */}
          <FormRowSelect
            name={"sort"}
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />

          <button
            className="btn btn-block btn-danger"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
}

export default SearchContainer;
