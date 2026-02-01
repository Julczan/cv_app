import "../styles/Input.css";
import EducationInfo from "./EducationInfo";
import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";

function InputSection() {
  return (
    <div className="input-section">
      <PersonalInfo />
      <EducationInfo />
      <Experience />
    </div>
  );
}

export default InputSection;
