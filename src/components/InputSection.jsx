import "../styles/Input.css";
import EducationInfo from "./EducationInfo";
import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";

function InputSection({ props, onSubmit }) {
  return (
    <div className="input-section">
      <PersonalInfo props={props} onSubmit={onSubmit} />
      <EducationInfo />
      <Experience />
    </div>
  );
}

export default InputSection;
