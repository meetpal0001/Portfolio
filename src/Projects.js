import React from 'react';
import projects from './data/projects';
import { Link } from 'lucide-react';



const Project = ({ title, description, repo, link, path }) => {
  const style = {
    backgroundImage: `url(${path})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: "center",
    height: '100%',
    width: '100%',
    opacity: 0.3,
    position: 'absolute',
    transition: 'all 0.3s ease'

  }
  return (
    <div className="project">
      <a href={repo} >
        <div style={style} className='project-background'></div>
        <div style={{ position: 'relative', padding: '1.5rem' }}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        {link && <div className='link' >
          <a href={link} aria-label={"Web Link"} >
            <Link />

          </a>
          <span className='tooltip-web'>Website Link</span>

        </div>}
      </a>
      <span className='tooltip-repo'>Repository Link</span>
    </div>
  );
}

const Projects = () => {

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <p className="section-title">My Recent Work</p>
        <div className="projects-grid">
          {projects.map((project) => (
            <Project key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;