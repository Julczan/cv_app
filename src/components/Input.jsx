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

function DateInput({ label, value, id }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} value={value} type="date" />
    </>
  );
}

function TextAreaInput({ label, value, id }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <textarea id={id} name={id} value={value} />
    </>
  );
}

export { Input, DateInput, TextAreaInput };
