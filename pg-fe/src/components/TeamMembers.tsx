import React from 'react';

const TeamMembers: React.FC = () => {
  return (
    <div className="team-members">
      <h3>Team Members:</h3>
      <ul>
      <li>
            <a href="https://www.linkedin.com/in/samir-rsharma" target="_blank" rel="noopener noreferrer">
              Samir Sharma
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/kevin-dang" target="_blank" rel="noopener noreferrer">
              Kevin Dang
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/noah-levy" target="_blank" rel="noopener noreferrer">
              Noah Levy
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/aadi-umrani" target="_blank" rel="noopener noreferrer">
              Aadi Umrani
            </a>
          </li>
      </ul>
    </div>
  );
};

export default TeamMembers;