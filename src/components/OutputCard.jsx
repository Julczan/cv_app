function OutputCard() {
  return (
    <div className="card-output">
      <div className="output-header">
        <h1>My name</h1>
        <div className="contact">
          <p>Email</p>
          <p>Phone</p>
          <p>Address</p>
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
          <li>
            <h2>Exp</h2>
            <p>Something</p>
            <p>2022 - 2025</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default OutputCard;
