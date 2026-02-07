import { Input, DateInput } from "./Input";

function InputForm() {
  return (
    <>
      <form action="post">
        <Input label={"School Name"} id={"schoolInput"} />
        <Input label={"Title of Study"} id={"titleInput"} />
        <DateInput label={"Start Date"} id={"startDateInput"} />
        <DateInput label={"End Date"} id={"endDateInput"} />
        <div className="btn-container">
          <button>Cancel</button>
          <button>Save</button>
        </div>
      </form>
    </>
  );
}

export default InputForm;
