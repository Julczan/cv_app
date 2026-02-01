import { Input, TextAreaInput, DateInput } from "./Input";
import Button from "./Button";

function Experience() {
  return (
    <div className="card">
      <h1>Experience</h1>
      <Input label={"Company Name"} id={"companyInput"} />
      <Input label={"Position Title"} id={"positionInput"} />
      <TextAreaInput
        label={"Job Responsibilities"}
        id={"responsibilityInput"}
      />
      <DateInput label={"Start Date"} id={"startExpInput"} />
      <DateInput label={"End Date"} id={"endExpInput"} />

      <div className="btn-container">
        <Button action={"Cancel"} />
        <Button action={"Save"} />
      </div>
    </div>
  );
}

export default Experience;
