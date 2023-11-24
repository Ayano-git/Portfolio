import React from 'react'
import './index.scss'
import ProjectCard from './ProjectCard'
import {
  tmpProjectImage1,
  tmpProjectImage2,
  tmpProjectImage3,
} from '../../../assets/imageLoader.js'

const GridProjects = () => {
  const gridProjectData = [
    {
      id: 1,
      projectLink: 'mirium-mixtis',
      projectImageSrc: tmpProjectImage1,
      projectTitle: 'Mirium Mixtis',
      projectAlt: '',
    },
    {
      id: 2,
      projectLink: 'wicked-shop',
      projectImageSrc: tmpProjectImage2,
      projectTitle: 'Wicked Shop',
      projectAlt: '',
    },
    {
      id: 3,
      projectLink: 'portfolio',
      projectImageSrc: tmpProjectImage3,
      projectTitle: 'Portfolio',
      projectAlt: '',
    },
    {
      id: 4,
      projectLink: 'grind-together',
      projectImageSrc: tmpProjectImage3,
      projectTitle: 'Grind Together',
      projectAlt: '',
    },
  ]

  return (
    <div className='projects-container'>
      <h2>My projects</h2>
      <div className="projects-grid-container">
        {gridProjectData.map((project) => (
          <ProjectCard
            key={project.id}
            projectImageSrc={project.projectImageSrc}
            projectTitle={project.projectTitle}
            projectAlt={project.projectAlt}
          />
        ))}
      </div>
    </div>
  )
}

export default GridProjects
