import { Input } from "./Input";
import Button from "./Button";

function PersonalInfo() {
  return (
    <div className="card">
      <h1>Personal Details</h1>
      <Input label={"Full name"} id={"nameInput"} />
      <Input label={"Email"} id={"emailInput"} />
      <Input label={"Phone number"} id={"phoneInput"} />
      <Input label={"Address"} id={"addressInput"} />
      <div className="btn-container">
        <Button action={"Cancel"} />
        <Button action={"Save"} />
      </div>
    </div>
  );
}

export default PersonalInfo;
