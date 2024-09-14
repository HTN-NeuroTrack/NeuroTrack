import React from 'react';

const teamMembers = [
  { name: 'Samir Sharma', linkedin: 'https://www.linkedin.com/in/samir-sharma' },
  { name: 'Kevin Dang', linkedin: 'https://www.linkedin.com/in/kevin-dang' },
  { name: 'Noah Levy', linkedin: 'https://www.linkedin.com/in/noah-levy' },
  { name: 'Aadi Umrani', linkedin: 'https://www.linkedin.com/in/aadi-umrani' }
];

const TeamMembers: React.FC = () => {
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Team Members</h3>
      <ul className="space-y-2">
        {teamMembers.map((member) => (
          <li key={member.name}>
            <a href={member.linkedin} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              {member.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamMembers;