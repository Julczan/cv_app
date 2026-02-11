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

  function addPersonalInfo({ name, email, phone, address }) {
    const newPersonalInfo = {
      name: name,
      email: email,
      phone: phone,
      address: address,
    };

    setPersonalInfo(newPersonalInfo);
  }

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

  function editExperience(id, newExperience) {
    const editedExperience = experienceInfo.map((experience) => {
      if (id === experience.id) {
        return {
          ...experience,
          companyName: newExperience.companyName,
          position: newExperience.position,
          responsibility: newExperience.responsibility,
          startDate: newExperience.startDate,
          endDate: newExperience.endDate,
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

  function editEducation(id, newEducation) {
    const editedEducation = educationInfo.map((education) => {
      if (id === education.id) {
        return {
          ...education,
          schoolName: newEducation.schoolName,
          title: newEducation.title,
          startDate: newEducation.startDate,
          endDate: newEducation.endDate,
        };
      }

      return education;
    });

    setEducationInfo(editedEducation);
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
        initialInfo={personalInfo}
        educationInfo={educationInfo}
        experienceInfo={experienceInfo}
        addPersonalInfo={addPersonalInfo}
        addExperience={addExperience}
        deleteExperience={deleteExperience}
        editExperience={editExperience}
        addEducation={addEducation}
        editEducation={editEducation}
        deleteEducation={deleteEducation}
      />
      <OutputCard
        personalInfo={personalInfo}
        experienceInfo={experienceInfo}
        educationInfo={educationInfo}
      />
    </>
  );
}

export default App;
