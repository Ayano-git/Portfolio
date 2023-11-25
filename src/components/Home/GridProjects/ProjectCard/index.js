import React from 'react'

import './index.scss'
import { Link, NavLink } from 'react-router-dom'

const ProjectCard = ({ projectImageSrc, projectTitle, projectAlt, projectLink }) => {
  return (
    <div className="project-card-container">
      <NavLink className="project-card" to={projectLink}>
        <img src={projectImageSrc} alt={projectAlt} />
        <h3>{projectTitle}</h3>
      </NavLink>
    </div>
  )
}

export default ProjectCard