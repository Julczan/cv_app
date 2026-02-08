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
    setExperienceInfo({
      ...experienceInfo,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addExperience(experienceInfo);
    setExperienceInfo({
      companyName: "",
      position: "",
      responsibility: "",
      startDate: "",
      endDate: "",
    });
  }

  return (
    <div className="card">
      <h1>Experience</h1>
      <form action="post" onSubmit={handleSubmit}>
        <Input
          label={"Company Name"}
          id={"companyName"}
          value={experienceInfo.companyName}
          onChange={handleChange}
        />
        <Input
          label={"Position Title"}
          id={"position"}
          value={experienceInfo.position}
          onChange={handleChange}
        />
        <TextAreaInput
          label={"Job Responsibilities"}
          id={"responsibility"}
          value={experienceInfo.responsibility}
          onChange={handleChange}
        />
        <DateInput
          label={"Start Date"}
          id={"startDate"}
          value={experienceInfo.startDate}
          onChange={handleChange}
        />
        <DateInput
          label={"End Date"}
          id={"endDate"}
          value={experienceInfo.endDate}
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

export default Experience;
