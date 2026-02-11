import "../styles/Input.css";
import EducationInfo from "./EducationInfo";
import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";

function InputSection(props) {
  return (
    <div className="input-section">
      <PersonalInfo
        addPersonalInfo={props.addPersonalInfo}
        initialInfo={props.initialInfo}
      />
      <EducationInfo
        addEducation={props.addEducation}
        educationTitles={props.educationInfo}
        deleteEducation={props.deleteEducation}
        editEducation={props.editEducation}
      />
      <Experience
        addExperience={props.addExperience}
        deleteExperience={props.deleteExperience}
        experienceTitles={props.experienceInfo}
        editExperience={props.editExperience}
      />
    </div>
  );
}

export default InputSection;
