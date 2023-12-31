import React from 'react'

import './index.scss'
import { NavLink } from 'react-router-dom'

const ProjectCard = ({ projectImageSrc, projectTitle, projectAlt, projectLink, index }) => {
  const cardClassName = `project-card card-${index + 1}`;
  return (
    <div className="project-card-container">
      <NavLink className={cardClassName} to={`/projects/${projectLink}`}>
        <img src={projectImageSrc} alt={projectAlt} />
        <h3>{projectTitle}</h3>
      </NavLink>
    </div>
  )
}

export default ProjectCard
