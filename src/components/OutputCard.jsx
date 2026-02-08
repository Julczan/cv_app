import "../styles/Output.css";

function OutputCard(props) {
  return (
    <div className="output-section">
      <div className="card-output">
        <div className="output-header">
          <h1>{}</h1>
          <div className="contact">
            <p>{}</p>
            <p>{}</p>
            <p>{}</p>
          </div>
        </div>
        <div className="education-container">
          <h1>Education</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            aperiam voluptate dolorem veniam error placeat dolore at eligendi
            mollitia ipsa, expedita, facilis quod! Atque at tempora culpa animi,
            reiciendis est.
          </p>
        </div>

        <div className="experience-container">
          <h1>Work Experience</h1>
          {props.experienceInfo.map((experience) => (
            <ul key={experience.id}>
              <h2>
                {experience.companyName} - {experience.position}
              </h2>
              <p>{experience.responsibility}</p>
              <p>
                {experience.startDate} - {experience.endDate}
              </p>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OutputCard;
