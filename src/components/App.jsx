import { useState } from "react";
import InputSection from "./InputSection";
import OutputCard from "./OutputCard";

function App(props) {
  const [personalInfo, setPersonalInfo] = useState(props.initialInfo.personal);
  const [educationInfo, setEducationInfo] = useState(
    props.initialInfo.education,
  );
  const [experienceInfo, setExperienceInfo] = useState(
    props.initialInfo.experience,
  );

  function addExperience({
    companyName,
    position,
    responsibility,
    startDate,
    endDate,
  }) {
    const newExperience = {
      id: "id",
      companyName: companyName,
      position: position,
      responsibility: responsibility,
      startDate: startDate,
      endDate: endDate,
    };

    setEducationInfo([...experienceInfo, newExperience]);
  }

  return (
    <>
      <InputSection
        personalInfo={personalInfo}
        educationInfo={educationInfo}
        experienceInfo={experienceInfo}
        addExperience={addExperience}
      />
      <OutputCard />
    </>
  );
}

export default App;
