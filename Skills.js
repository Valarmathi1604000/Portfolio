import React from 'react';
import './Skills.css'; // Import the CSS file
import htmlIcon from '../assets/html-5.png';
import cssIcon from '../assets/css.png';
import jsIcon from '../assets/java-script.png';
import reactIcon from '../assets/react.png';
import gitIcon from '../assets/github.png';
import cloudIcon from '../assets/cloud.png';

function Skills() {
  const skills = [
    { name: 'HTML', icon: htmlIcon },
    { name: 'CSS', icon: cssIcon },
    { name: 'JavaScript', icon: jsIcon },
    { name: 'React', icon: reactIcon },
    { name: 'Git', icon: gitIcon },
    { name: 'Cloud', icon: cloudIcon },
  ];

  return (
    <section className="skills-section">
      <h1 className="skills-header">My Skills</h1>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">
              <img src={skill.icon} alt={skill.name} />
            </div>
            <h3 className="skill-name">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
