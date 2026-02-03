import { useState } from "react";
import InputSection from "./InputSection";
import OutputCard from "./OutputCard";
import initialInfo from "./initialInfo";

function App() {
  const [info, setInfo] = useState(initialInfo);

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;

    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());

    setInfo({
      ...info,
      name: formJson.nameInput,
      email: formJson.emailInput,
      phone: formJson.phoneInput,
      address: formJson.addressInput,
    });
  }

  return (
    <>
      <InputSection props={info} onSubmit={handleSubmit} />
      <OutputCard
        fullName={info.name}
        email={info.email}
        phone={info.phone}
        address={info.address}
        experience={info.experience}
      />
    </>
  );
}

export default App;
