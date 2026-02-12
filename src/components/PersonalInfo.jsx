import { useState } from "react";
import { Input } from "./Input";
import Icon from "@mdi/react";
import { mdiMenuDown } from "@mdi/js";

function PersonalInfo(props) {
  const [personalInfo, setPersonalInfo] = useState(props.initialInfo);
  const [shown, setShown] = useState(false);

  function handleShow() {
    setShown(!shown);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addPersonalInfo(personalInfo);
  }

  function handleChange(e) {
    setPersonalInfo({
      ...personalInfo,
      [e.target.name]: [e.target.value],
    });
  }

  return (
    <>
      {shown ? (
        <div className="card">
          <h1>Personal Information</h1>
          <button className="show-btn" onClick={handleShow}>
            <Icon path={mdiMenuDown} size={1} vertical />
          </button>
          <form action="post" onSubmit={handleSubmit}>
            <Input
              label={"Full name"}
              id={"name"}
              value={personalInfo.name}
              onChange={handleChange}
            />
            <Input
              label={"Email"}
              id={"email"}
              value={personalInfo.email}
              onChange={handleChange}
            />
            <Input
              label={"Phone number"}
              id={"phone"}
              value={personalInfo.phone}
              onChange={handleChange}
            />
            <Input
              label={"Address"}
              id={"address"}
              value={personalInfo.address}
              onChange={handleChange}
            />
            <div className="btn-container">
              <button type="submit">Save</button>
            </div>
          </form>
        </div>
      ) : (
        <div className="card-unactive">
          <h1>Personal Information</h1>
          <button className="show-btn" onClick={handleShow}>
            <Icon path={mdiMenuDown} size={1} />
          </button>
        </div>
      )}
    </>
  );
}

export default PersonalInfo;
