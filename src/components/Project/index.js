// Project.jsx
import React from 'react'
import { useParams } from 'react-router-dom'
import { projectContentData } from './projectContent'
import './index.scss'

const Project = () => {
  // Utilisez le hook useParams pour extraire le paramètre projectLink
  const { link } = useParams()

  // Recherchez les données du projet correspondant dans le jeu de données
  const projectData = projectContentData.find(
    (project) => project.link === link
  )

  if (!projectData) {
    // Gérez le cas où le link ne correspond à aucun projet
    return <div>Projet non trouvé</div>
  }

  // Rendez le contenu du projet en fonction des données trouvées
  return (
    <div className="project-page">
      <h1>{projectData.title}</h1>
      <p className="resume">{projectData.resume}</p>
      {/* Autres éléments en fonction des blocs, outils, etc. */}
      <ul className="tools-list">
        {projectData.tools.map((projectTool, index) => (
          <li className="tool-tag" key={index}>
            {projectTool}
          </li>
        ))}
      </ul>
      <div className="project-content-grid">
        {projectData.blocs.map((projectBloc, index) => (
          <div
            className={`content-bloc ${
              index % 2 === 0 ? 'even-display' : 'odd-display'
            }`}
            key={index}
          >
            {index % 2 === 0 ? (
              <>
                <p>{projectBloc.txt}</p>
                <img src={projectBloc.imgSrc} alt="" />
              </>
            ) : (
              <>
                <img src={projectBloc.imgSrc} alt="" />
                <p>{projectBloc.txt}</p>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="project-gallery-container">
        <h2>Gallery</h2>
        <div className="project-gallery-grid">
          {projectData.gallery.map((projectGalleryItem, index) => (
            <img src={projectGalleryItem} key={index} alt="" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project
