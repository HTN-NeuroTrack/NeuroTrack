import React from 'react';

const teamMembers = [
  { name: 'Samir Sharma', linkedin: 'https://www.linkedin.com/in/samir-rsharma/' },
  { name: 'Kevin Dang', linkedin: 'https://www.linkedin.com/in/kevin-dang-a922712ab/' },
  { name: 'Noah Levy', linkedin: 'https://www.linkedin.com/in/noah-levy-576295302/' },
  { name: 'Aadi Umrani', linkedin: 'https://www.linkedin.com/in/aadi-umrani' }
];

const TeamMembers: React.FC = () => {
  return (
    <div className="mt-6">
      <div className="flex flex-wrap justify-center gap-4">
        {teamMembers.map((member) => (
          <a 
            key={member.name} 
            href={member.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm text-gray-500 hover:text-blue-400 transition-colors font-light">
            {member.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
