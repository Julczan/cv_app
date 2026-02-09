import "../styles/Input.css";
import EducationInfo from "./EducationInfo";
import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";

function InputSection(props) {
  return (
    <div className="input-section">
      <PersonalInfo info={props.personalInfo} />
      <EducationInfo
        addEducation={props.addEducation}
        educationTitles={props.educationInfo}
        deleteEducation={props.deleteEducation}
      />
      <Experience
        addExperience={props.addExperience}
        deleteExperience={props.deleteExperience}
        experienceTitles={props.experienceInfo}
      />
    </div>
  );
}

export default InputSection;
