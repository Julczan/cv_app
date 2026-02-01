import EducationInfo from "./EducationInfo";
import PersonalInfo from "./PersonalInfo";

function InputSection() {
  return (
    <div className="input-section">
      <PersonalInfo />
      <EducationInfo />
    </div>
  );
}

export default InputSection;
