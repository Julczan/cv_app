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

  const [newExperience, setNewExperience] = useState({
    companyName: "",
    position: "",
    responsibility: "",
    startDate: "",
    endDate: "",
  });

  const [editingExperience, setEditingExperience] = useState(false);

  const [formState, setFormState] = useState("hidden");

  function handleFormState(state) {
    setFormState(state);
  }

  function handleChange(event) {
    setExperienceInfo({
      ...experienceInfo,
      [event.target.name]: event.target.value,
    });
  }

  function handleChangeUpdate(event) {
    setNewExperience({
      ...newExperience,
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

    handleFormState("hidden");
  }

  function handleSubmitUpdate(e) {
    e.preventDefault();
    props.editExperience(editingExperience.id, newExperience);
    setNewExperience({
      companyName: "",
      position: "",
      responsibility: "",
      startDate: "",
      endDate: "",
    });

    handleFormState("hidden");
    setEditingExperience(false);
  }

  const addForm = (
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

  const titleCard = (
    <div className="card-unactive">
      <h1>Experience</h1>
      {props.experienceTitles.map((title) => (
        <ul key={title.id} className="card-title">
          <h2>{title.companyName}</h2>
          <div className="card-title-btns">
            <button onClick={() => props.deleteExperience(title.id)}>
              Delete
            </button>
            <button
              onClick={() => {
                setFormState("editing");
                setEditingExperience(title);
                setNewExperience(title);
              }}
            >
              Edit
            </button>
          </div>
        </ul>
      ))}
      <button onClick={() => handleFormState("shown")}>
        Add new experience
      </button>
    </div>
  );

  const editExperience = (
    <div className="card">
      <h1>Experience</h1>
      <form action="post" onSubmit={handleSubmitUpdate}>
        <Input
          label={"Company Name"}
          id={"companyName"}
          value={newExperience.companyName}
          onChange={handleChangeUpdate}
        />
        <Input
          label={"Position Title"}
          id={"position"}
          value={newExperience.position}
          onChange={handleChangeUpdate}
        />
        <TextAreaInput
          label={"Job Responsibilities"}
          id={"responsibility"}
          value={newExperience.responsibility}
          onChange={handleChangeUpdate}
        />
        <DateInput
          label={"Start Date"}
          id={"startDate"}
          value={newExperience.startDate}
          onChange={handleChangeUpdate}
        />
        <DateInput
          label={"End Date"}
          id={"endDate"}
          value={newExperience.endDate}
          onChange={handleChangeUpdate}
        />

        <div className="btn-container">
          <button>Cancel</button>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );

  if (formState === "hidden") {
    return titleCard;
  } else if (formState === "shown") {
    return addForm;
  } else {
    return editExperience;
  }
}

export default Experience;
