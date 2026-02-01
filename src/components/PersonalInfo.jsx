function PersonalInfo() {
  return (
    <div className="card">
      <h1>Personal Details</h1>
      <Input label={"Full name"} />
      <Input label={"Email"} />
      <Input label={"Phone number"} />
      <Input label={"Address"} />
    </div>
  );
}

function Input({ label, value }) {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input value={value} id={value} />
    </>
  );
}

export default PersonalInfo;
