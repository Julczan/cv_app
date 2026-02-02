import { useState } from "react";
import InputSection from "./InputSection";
import OutputCard from "./OutputCard";
import initialInfo from "./initialInfo";

function App() {
  const [info, setInfo] = useState(initialInfo);

  return (
    <>
      <InputSection />
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
