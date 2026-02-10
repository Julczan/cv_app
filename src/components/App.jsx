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

  function editExperience(
    id,
    companyName,
    position,
    responsibility,
    startDate,
    endDate,
  ) {
    const editedExperience = experienceInfo.map((experience) => {
      if (id === experience.id) {
        return {
          ...experience,
          companyName: companyName,
          position: position,
          responsibility: responsibility,
          startDate: startDate,
          endDate: endDate,
        };
      }

      return experience;
    });

    setExperienceInfo(editedExperience);
  }

  function deleteExperience(id) {
    const remainingExperience = experienceInfo.filter(
      (experience) => id !== experience.id,
    );

    setExperienceInfo(remainingExperience);
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

  function deleteEducation(id) {
    const remainingEducation = educationInfo.filter(
      (education) => id !== education.id,
    );

    setEducationInfo(remainingEducation);
  }

  return (
    <>
      <InputSection
        personalInfo={personalInfo}
        educationInfo={educationInfo}
        experienceInfo={experienceInfo}
        addExperience={addExperience}
        deleteExperience={deleteExperience}
        editExperience={editExperience}
        addEducation={addEducation}
        deleteEducation={deleteEducation}
      />
      <OutputCard
        experienceInfo={experienceInfo}
        educationInfo={educationInfo}
      />
    </>
  );
}

export default App;
