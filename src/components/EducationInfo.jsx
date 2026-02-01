import { Input, DateInput } from "./Input";
import Button from "./Button";

function EducationInfo() {
  return (
    <div className="card">
      <h1>Education</h1>
      <Input label={"School Name"} id={"schoolInput"} />
      <Input label={"Title of Study"} id={"titleInput"} />
      <DateInput label={"Start Date"} id={"startDateInput"} />
      <DateInput label={"End Date"} id={"endDateInput"} />
      <div className="btn-container">
        <Button action={"Cancel"} />
        <Button action={"Save"} />
      </div>
    </div>
  );
}

export default EducationInfo;
