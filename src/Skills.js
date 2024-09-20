import React from 'react';
import skills from './data/skills'



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