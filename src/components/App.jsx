import { useState } from "react";
import InputSection from "./InputSection";
import OutputCard from "./OutputCard";
import { nanoid } from "nanoid";

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
      id: `exp-${nanoid()}`,
      companyName: companyName,
      position: position,
      responsibility: responsibility,
      startDate: startDate,
      endDate: endDate,
    };

    setExperienceInfo([...experienceInfo, newExperience]);
  }

  function addEducation({ schoolName, title, startDate, endDate }) {
    const newEducation = {
      id: `edu-${nanoid()}`,
      schoolName: schoolName,
      title: title,
      startDate: startDate,
      endDate: endDate,
    };

    setEducationInfo([...educationInfo, newEducation]);
  }

  return (
    <>
      <InputSection
        personalInfo={personalInfo}
        educationInfo={educationInfo}
        experienceInfo={experienceInfo}
        addExperience={addExperience}
        addEducation={addEducation}
      />
      <OutputCard
        experienceInfo={experienceInfo}
        educationInfo={educationInfo}
      />
    </>
  );
}

export default App;
