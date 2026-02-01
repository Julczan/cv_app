import "../styles/Input.css";
import Input from "./Input";

function PersonalInfo() {
  return (
    <div className="card">
      <h1>Personal Details</h1>
      <Input label={"Full name"} id={"nameInput"} />
      <Input label={"Email"} id={"emailInput"} />
      <Input label={"Phone number"} id={"phoneInput"} />
      <Input label={"Address"} id={"addressInput"} />
    </div>
  );
}

export default PersonalInfo;
