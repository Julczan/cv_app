import { useState } from "react";
import { Input, DateInput } from "./Input";

function EducationInfo(props) {
  const [educationInfo, setEducationInfo] = useState({
    schoolName: "",
    title: "",
    startDate: "",
    endDate: "",
  });

  const [newEducation, setNewEducation] = useState({
    schoolName: "",
    title: "",
    startDate: "",
    endDate: "",
  });

  const [editingEducation, setEditingEducation] = useState(false);

  const [formState, setFormState] = useState("hidden");

  function handleFormState(state) {
    setFormState(state);
  }

  function handleChange(event) {
    setEducationInfo({
      ...educationInfo,
      [event.target.name]: event.target.value,
    });
  }

  function handleChangeUpdate(event) {
    setNewEducation({
      ...newEducation,
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

    handleFormState("hidden");
  }

  function handleSubmitUpdate(e) {
    e.preventDefault();
    props.editEducation(editingEducation.id, newEducation);
    setNewEducation({
      schoolName: "",
      title: "",
      startDate: "",
      endDate: "",
    });

    handleFormState("hidden");
    setEditingEducation(false);
  }

  const addForm = (
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

  const titleCard = (
    <div className="card-unactive">
      <h1>Education</h1>
      {props.educationTitles.map((title) => (
        <ul key={title.id} className="card-title">
          <h2>{title.schoolName}</h2>
          <div className="card-title-btns">
            <button onClick={() => props.deleteEducation(title.id)}>
              Delete
            </button>
            <button
              onClick={() => {
                setFormState("editing");
                setEditingEducation(title);
                setNewEducation(title);
              }}
            >
              Edit
            </button>
          </div>
        </ul>
      ))}
      <button onClick={() => handleFormState("shown")}>
        Add new education
      </button>
    </div>
  );

  const editEducationForm = (
    <div className="card">
      <h1>Education</h1>
      <form action="post" onSubmit={handleSubmitUpdate}>
        <Input
          label={"School Name"}
          id={"schoolName"}
          value={newEducation.schoolName}
          onChange={handleChangeUpdate}
        />
        <Input
          label={"Title of studies"}
          id={"title"}
          value={newEducation.title}
          onChange={handleChangeUpdate}
        />
        <DateInput
          label={"Start Date"}
          id={"startDate"}
          value={newEducation.startDate}
          onChange={handleChangeUpdate}
        />
        <DateInput
          label={"End Date"}
          id={"endDate"}
          value={newEducation.endDate}
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
    return editEducationForm;
  }
}

export default EducationInfo;
