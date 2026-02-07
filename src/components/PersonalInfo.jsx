import { Input } from "./Input";

function PersonalInfo() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <div className="card">
        <h1>Personal Information</h1>
        <button className="show-btn"></button>
        <form action="post" onSubmit={handleSubmit}>
          <Input label={"Full name"} id={"nameInput"} />
          <Input label={"Email"} id={"emailInput"} />
          <Input label={"Phone number"} id={"phoneInput"} />
          <Input label={"Address"} id={"addressInput"} />
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
