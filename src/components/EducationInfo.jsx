import { useState } from "react";
import { Input, DateInput } from "./Input";

function EducationInfo(props) {
  const [educationInfo, setEducationInfo] = useState({
    schoolName: "",
    title: "",
    startDate: "",
    endDate: "",
  });

  const [showForm, setShowForm] = useState(false);

  function handleShowForm() {
    setShowForm(!showForm);
  }

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

    handleShowForm();
  }

  return (
    <>
      {showForm ? (
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
      ) : (
        <div className="card-unactive">
          <h1>Experience</h1>
          {props.educationTitles.map((title) => (
            <ul key={title.id} className="card-title">
              <h2>{title.schoolName}</h2>
              <div className="card-title-btns">
                <button>Delete</button>
                <button>Edit</button>
              </div>
            </ul>
          ))}
          <button onClick={handleShowForm}>Add new experience</button>
        </div>
      )}
    </>
  );
}

export default EducationInfo;
