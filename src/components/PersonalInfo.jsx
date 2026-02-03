import { useState } from "react";
import { Input } from "./Input";

function PersonalInfo({ props, onSubmit }) {
  const [active, setActive] = useState(false);

  function handleShow() {
    setActive(!active);
  }

  return (
    <>
      {active ? (
        <div className="card">
          <h1>Personal Information</h1>
          <button className="show-btn" onClick={handleShow}></button>
          <form action="post" onSubmit={onSubmit}>
            <Input
              label={"Full name"}
              id={"nameInput"}
              defaultValue={props.name}
            />
            <Input
              label={"Email"}
              id={"emailInput"}
              defaultValue={props.email}
            />
            <Input
              label={"Phone number"}
              id={"phoneInput"}
              defaultValue={props.phone}
            />
            <Input
              label={"Address"}
              id={"addressInput"}
              defaultValue={props.address}
            />
            <div className="btn-container">
              <button>Cancel</button>
              <button type="submit">Save</button>
            </div>
          </form>
        </div>
      ) : (
        <div className="card-unactive">
          <h1>Personal Information</h1>
          <button className="show-btn" onClick={handleShow}></button>
        </div>
      )}
    </>
  );
}

export default PersonalInfo;
