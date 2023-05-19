import { FormRow, Alert, FormRowSelect } from "../../components";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
const AddJob = () => {
  const {
    isLoading,
    showAlert,
    displayAlert,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    statusOptions,
    isEditing,
    status,
    handleChange,
    clearValues,
    createJob,
    editJob,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position || !company || !jobLocation) {
      displayAlert();
      return;
    }
    if (isEditing) {
      editJob();
      return;
    }
    createJob();
  };
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };
  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "edit Job" : "add Job"}</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          {/*position*/}
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleInput}
          ></FormRow>
          {/*position*/}
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleInput}
          ></FormRow>
          {/*position*/}
          <FormRow
            type="text"
            labelText="job location"
            name="location"
            value={jobLocation}
            handleChange={handleInput}
          ></FormRow>
          <FormRowSelect
            name="status"
            value={status}
            handleChange={handleInput}
            list={statusOptions}
          ></FormRowSelect>
          <FormRowSelect
            name="job type"
            labelText="job type"
            value={jobType}
            handleChange={handleInput}
            list={jobTypeOptions}
          ></FormRowSelect>

          <div className="btn-container">
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
            <button
              className="btn bt-block clear-btn"
              onClick={(e) => {
                e.preventDefault();
                clearValues();
              }}
            >
              clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
