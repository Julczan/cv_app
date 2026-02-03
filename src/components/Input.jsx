function Input({ label, defaultValue, id }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} defaultValue={defaultValue} />
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
