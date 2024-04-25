import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { FormRow, FormRowSelect } from "../components";
import {
  clearValues,
  createJob,
  editJob,
  handleChange,
} from "../features/job/jobSlice";

function AddJob() {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.jobState);
  const { user } = useSelector((store) => store.userState);
  const dispatch = useDispatch();

  // set the default value of the user location from the userSlice
  useEffect(() => {
    if (!isEditing) {
      dispatch(handleChange({ key: "jobLocation", value: user.location }));
    }
  }, []);

  // handleSubmit
  function handleSubmit(e) {
    e.preventDefault();
    if (!position || !company || !jobLocation) {
      toast.error("please fill out all the fields");
      return;
    }

    const jobObj = { position, company, jobLocation, jobType, status };

    // if editing is true
    if (isEditing) {
      dispatch(editJob({ jobId: editJobId, job: jobObj }));
      return;
    }

    dispatch(createJob(jobObj));
  }

  // handleJobInput
  function handleJobInput(e) {
    const key = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ key, value }));
  }

  // handleClearValues
  function handleClearValues() {
    dispatch(clearValues());
  }

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "edit job" : "add job"}</h3>

        <div className="form-center">
          {/* position */}
          <FormRow
            type={"text"}
            name={"position"}
            value={position}
            handleChange={handleJobInput}
          />

          {/* company */}
          <FormRow
            type={"text"}
            name={"company"}
            value={company}
            handleChange={handleJobInput}
          />

          {/* job location */}
          <FormRow
            type={"text"}
            name={"jobLocation"}
            labelText={"job location"}
            value={jobLocation}
            handleChange={handleJobInput}
          />

          {/* status*/}
          <FormRowSelect
            name={"status"}
            list={statusOptions}
            handleChange={handleJobInput}
            value={status}
          />

          {/* job type*/}
          <FormRowSelect
            name={"jobType"}
            labelText={"job type"}
            list={jobTypeOptions}
            handleChange={handleJobInput}
            value={jobType}
          />

          <div className="btn-container">
            <button
              type="button"
              className="btn btn-block clear-btn"
              onClick={handleClearValues}
            >
              clear
            </button>

            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
}

export default AddJob;
