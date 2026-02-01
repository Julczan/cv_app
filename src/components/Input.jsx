function Input({ label, value, id }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} value={value} />
    </>
  );
}

export default Input;
