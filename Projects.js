import React from 'react';
import './Projects.css'; // Import the CSS file
import Project1 from '../assets/Project 1.png';
import Project2 from '../assets/Project 2.png';



function Projects() {
  const projects = [
   
    {
      title: 'To-Do-List',
      description: 'A web application for A web application for managing daily tasks efficiently, allowing users to create, edit, complete, and delete tasks to stay organized and productive.',
      image: Project1,
      link: 'https://github.com/Valarmathi1604000/To-Do-List',
    },
    {
      title: 'Shopping Cart App',
      description: 'An online plant shop with a shopping cart feature.',
      image: Project2,
      link: 'https://github.com/Valarmathi1604000/e-plantShopping',
    },
    
  ];

  return (
    <section className="projects-section">
      <h1 className="projects-header">My Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
