import React from 'react';
import skills from './data/skills'

const SkillIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const Skill = ({ skill }) => (
  <div className="skill">
    <div className="skill-icon">
      <skill.icon />
    </div>
    <p>{skill.name}</p>
  </div>
);

const Skills = () => {

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>
        <p className="section-title">Technologies I work with</p>
        <div className="skills-grid">
          {skills.map((skill) => (
            <Skill key={skill} skill={{...skill}} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;