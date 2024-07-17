import React from 'react';

function EducationCard({ degree, institution, date, skills, description, logo }) {
  return (
    <div className="bg-white text-black rounded-lg shadow-2xl p-6 max-w-4xl mx-auto flex items-center">
      <img src={logo} alt={`${institution} logo`} className="w-16 h-16 mr-6" />
      <div className="flex-grow">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold">{degree}</h3>
          <span className="text-gray-600">{date}</span>
        </div>
        <h4 className="text-xl font-semibold mt-2">{institution}</h4>
        <p className="mt-2 text-gray-700"><strong>Skills Acquired:</strong> {skills}</p>
        <p className="mt-2 text-gray-700">{description}</p>
      </div>
    </div>
  );
}

export default EducationCard;
