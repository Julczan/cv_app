import "../styles/Output.css";

function OutputCard({ fullName, email, phone, address, experience }) {
  return (
    <div className="output-section">
      <div className="card-output">
        <div className="output-header">
          <h1>{fullName}</h1>
          <div className="contact">
            <p>{email}</p>
            <p>{phone}</p>
            <p>{address}</p>
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

          <ul>
            {experience.map((exp) => (
              <li key={exp.id}>
                <h2>{exp.companyName}</h2>
                <p>{exp.position}</p>
                <p>
                  {exp.startDate} - {exp.endDate}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OutputCard;
