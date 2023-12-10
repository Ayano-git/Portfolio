// Project.jsx
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { projectContentData } from './projectContent'
import './index.scss'
import Loader from 'react-loaders'

const Project = () => {
  // Utilisez le hook useParams pour extraire le paramètre projectLink
  const { link } = useParams()
  const [loading, setLoading] = useState(true)
  const [visibleIndexes, setVisibleIndexes] = useState([]);

  useEffect(() => {
    // Simule le chargement
    const timeoutId = setTimeout(() => {
      setLoading(false)
    }, 1500)

    // Nettoyage lors du démontage du composant
    return () => clearTimeout(timeoutId)
  }, [])

  // Recherchez les données du projet correspondant dans le jeu de données
  const projectData = projectContentData.find(
    (project) => project.link === link
  )
  
  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = parseInt(entry.target.dataset.index, 10);
        setVisibleIndexes((prevIndexes) => [...prevIndexes, index]);
        observer.unobserve(entry.target);
      }
    });
  };
  
  // Créez une liste de références pour chaque élément de projectData.blocs
  const blocRefs = projectData.blocs.map(() => React.createRef());
  
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.50,
    });
  
    blocRefs.forEach((ref, index) => {
      const element = ref.current;
      if (element) {
        observer.observe(element);
        console.log(`Observing element ${index}`);
        // Associez l'index à l'élément en utilisant un attribut data
        element.dataset.index = index;
      } else {
        console.warn(`Element ${index} not found`);
      }
    });
  
    return () => observer.disconnect();
  }, [blocRefs]);

  if (!projectData) {
    // Gérez le cas où le link ne correspond à aucun projet
    return <div>Projet non trouvé </div>
  }

  // Rendez le contenu du projet en fonction des données trouvées
  return (
    <>
      {!loading && (
        <div className="project-page">
          <h1>{projectData.title}</h1>
          <p className="resume">{projectData.resume}</p>
          {/* Autres éléments en fonction des blocs, outils, etc. */}
          <ul className="tag-list">
            {projectData.tools.map((projectTool, index) => (
              <li className="tag tool-tag" key={index}>
                {projectTool}
              </li>
            ))}
          </ul>
          <div className="project-content-grid">
            {projectData.blocs.map((projectBloc, index) => (
              <div
              className={`content-bloc slide-in-from-right ${
                index % 2 === 0 ? 'even-display' : 'odd-display'
              } ${visibleIndexes.includes(index) ? 'visible' : 'hidden'}`}
              key={index}
              ref={blocRefs[index]}
              id={`content-bloc-${index + 1}`}
              data-index={index + 1}
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
      )}
      <Loader loading={loading} type="pacman" />
    </>
  )
}

export default Project
