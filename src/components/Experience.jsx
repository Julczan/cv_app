import { useState } from "react";
import { Input, TextAreaInput, DateInput } from "./Input";
import Icon from "@mdi/react";
import { mdiDelete } from "@mdi/js";
import { mdiFileEditOutline } from "@mdi/js";
import { mdiPlus } from "@mdi/js";

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
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );

  const titleCard = (
    <div className="card-unactive">
      <h1>Experience</h1>
      {props.experienceTitles.map((title) => (
        <div key={title.id} className="card-title">
          <h2>{title.companyName}</h2>
          <div className="card-title-btns">
            <button
              className="delete-btn"
              onClick={() => props.deleteExperience(title.id)}
            >
              <Icon className="icon-delete" path={mdiDelete} size={1} />
              Delete
            </button>
            <button
              className="edit-btn"
              onClick={() => {
                setFormState("editing");
                setEditingExperience(title);
                setNewExperience(title);
              }}
            >
              <Icon path={mdiFileEditOutline} size={1} className="icon-edit" />
              Edit
            </button>
          </div>
        </div>
      ))}
      <button onClick={() => handleFormState("shown")}>
        <Icon path={mdiPlus} size={1} className="icon" />
        Add Experience
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
