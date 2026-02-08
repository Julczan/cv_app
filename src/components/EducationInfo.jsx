import { useState } from "react";
import { Input, TextAreaInput, DateInput } from "./Input";

function EducationInfo(props) {
  const [educationInfo, setEducationInfo] = useState({
    schoolName: "",
    title: "",
    startDate: "",
    endDate: "",
  });

  function handleChange(event) {
    setEducationInfo({
      ...educationInfo,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addEducation(educationInfo);
    setEducationInfo({
      schoolName: "",
      title: "",
      startDate: "",
      endDate: "",
    });
  }

  return (
    <div className="card">
      <h1>Education</h1>
      <form action="post" onSubmit={handleSubmit}>
        <Input
          label={"School Name"}
          id={"schoolName"}
          value={educationInfo.schoolName}
          onChange={handleChange}
        />
        <Input
          label={"Title of studies"}
          id={"title"}
          value={educationInfo.title}
          onChange={handleChange}
        />
        <DateInput
          label={"Start Date"}
          id={"startDate"}
          value={educationInfo.startDate}
          onChange={handleChange}
        />
        <DateInput
          label={"End Date"}
          id={"endDate"}
          value={educationInfo.endDate}
          onChange={handleChange}
        />

        <div className="btn-container">
          <button>Cancel</button>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
}

export default EducationInfo;
