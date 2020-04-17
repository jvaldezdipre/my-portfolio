import React from 'react';
import MainProjects from './MainProjects';
import OtherProjects from './OtherProjects';

const ProjectsPage = () => {
  return (
    <div>
      <header>
        <h1>Jeffrey Valdez</h1>
        <h3>Full Stack Web Developer</h3>
      </header>
      <MainProjects />
      <OtherProjects />
    </div>
  );
};

export default ProjectsPage;
