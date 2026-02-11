import { useState } from "react";
import { Input } from "./Input";

function PersonalInfo(props) {
  const [personalInfo, setPersonalInfo] = useState(props.initialInfo);

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
      <div className="card">
        <h1>Personal Information</h1>
        <button className="show-btn"></button>
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
            <button>Cancel</button>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default PersonalInfo;
