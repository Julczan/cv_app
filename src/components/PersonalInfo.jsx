import { Input } from "./Input";

function PersonalInfo({ onClick }) {
  return (
    <div className="card">
      <h1>Personal Details</h1>
      <Input label={"Full name"} id={"nameInput"} />
      <Input label={"Email"} id={"emailInput"} />
      <Input label={"Phone number"} id={"phoneInput"} />
      <Input label={"Address"} id={"addressInput"} />
      <div className="btn-container">
        <button onClick={onClick}>Cancel</button>
        <button>Save</button>
      </div>
    </div>
  );
}

export default PersonalInfo;
