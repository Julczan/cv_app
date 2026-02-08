import "../styles/Input.css";
import EducationInfo from "./EducationInfo";
import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";

function InputSection(props) {
  return (
    <div className="input-section">
      <PersonalInfo info={props.personalInfo} />
      <EducationInfo addEducation={props.addEducation} />
      <Experience addExperience={props.addExperience} />
    </div>
  );
}

export default InputSection;
