function Input(props) {
  return (
    <>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type="text"
        id={props.id}
        name={props.id}
        value={props.value}
        onChange={props.onChange}
      />
    </>
  );
}

function DateInput(props) {
  return (
    <>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        name={props.id}
        value={props.value}
        type="date"
        onChange={props.onChange}
      />
    </>
  );
}

function TextAreaInput(props) {
  return (
    <>
      <label htmlFor={props.id}>{props.label}</label>
      <textarea
        id={props.id}
        name={props.id}
        value={props.value}
        onChange={props.onChange}
      />
    </>
  );
}

export { Input, DateInput, TextAreaInput };
