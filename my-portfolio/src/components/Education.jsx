import React from 'react';
import EducationCard from './EducationCard';

function Education() {
  return (
    <section id="education" className="min-h-screen pt-6 bg-gray-100">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800">Education</h2>
        </div>
        <div className="ml-auto"> {/* Use ml-auto to align content to the left */}
          <EducationCard
            degree="Bachelor of Science in Software Engineering"
            institution="FAST NUCES, Lahore"
            date="Expected June 2025"
            skills="Software Development, Machine Learning, Data Structures"
            description="A comprehensive program focused on the fundamentals of software development, including programming languages, algorithms, and machine learning."
            logo="/path-to-logo.png"
          />
          {/* Add more EducationCard components as needed */}
        </div>
      </div>
    </section>
  );
}

export default Education;
