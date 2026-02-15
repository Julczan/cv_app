import "../styles/Output.css";
import Icon from "@mdi/react";
import { mdiPhone } from "@mdi/js";
import { mdiEmailOutline } from "@mdi/js";
import { mdiMapMarker } from "@mdi/js";

function OutputCard(props) {
  return (
    <div className="output-section">
      <div className="card-output">
        <div className="output-header">
          <h1>{props.personalInfo.name}</h1>
          <div className="contact">
            <p>
              <Icon path={mdiEmailOutline} size={1} className="icon personal" />
              {props.personalInfo.email}
            </p>
            <p>
              <Icon path={mdiPhone} size={1} className="icon personal" />
              {props.personalInfo.phone}
            </p>
            <p>
              <Icon path={mdiMapMarker} size={1} className="icon personal" />
              {props.personalInfo.address}
            </p>
          </div>
        </div>
        <div className="right-container">
          <div className="education-container">
            <h1>Education</h1>
            {props.educationInfo.map((education) => (
              <div className="container" key={education.id}>
                <h2>{education.schoolName}</h2>
                <h3>{education.title}</h3>
                <p>
                  {education.startDate} - {education.endDate}
                </p>
              </div>
            ))}
          </div>

          <div className="experience-container">
            <h1>Professional Experience</h1>
            {props.experienceInfo.map((experience) => (
              <div className="container" key={experience.id}>
                <h2>{experience.companyName}</h2>
                <h3>{experience.position}</h3>
                <h4>{experience.responsibility}</h4>
                <p>
                  {experience.startDate} - {experience.endDate}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OutputCard;
