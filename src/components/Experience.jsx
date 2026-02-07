import { useState } from "react";
import { Input, TextAreaInput, DateInput } from "./Input";

function Experience(props) {
  const [experienceInfo, setExperienceInfo] = useState({
    companyName: "",
    position: "",
    responsibility: "",
    startDate: "",
    endDate: "",
  });

  function handleChange(event) {
    setExperienceInfo(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addExperience(experienceInfo);
  }

  return (
    <div className="card">
      <h1>Experience</h1>
      <form action="post" onSubmit={handleSubmit}>
        <Input
          label={"Company Name"}
          id={"companyInput"}
          value={experienceInfo}
          onChange={handleChange}
        />
        <Input label={"Position Title"} id={"positionInput"} />
        <TextAreaInput
          label={"Job Responsibilities"}
          id={"responsibilityInput"}
        />
        <DateInput label={"Start Date"} id={"startExpInput"} />
        <DateInput label={"End Date"} id={"endExpInput"} />

        <div className="btn-container">
          <button>Cancel</button>
          <button>Save</button>
        </div>
      </form>
    </div>
  );
}

export default Experience;
