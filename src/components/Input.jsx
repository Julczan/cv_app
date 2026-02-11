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
        autoComplete="no"
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
        autoComplete="no"
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
        autoComplete="no"
      />
    </>
  );
}

export { Input, DateInput, TextAreaInput };
