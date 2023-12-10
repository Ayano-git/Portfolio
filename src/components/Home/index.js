import React, { useEffect, useState } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import GridProjects from './GridProjects'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['n', 't', 'h', 'o', 'n', 'y']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

//   J'utilise une fonction asynchrone car en utilisant simplement useEffect j'obtiens l'erreur : destroy is not a function
  const textAnimateTimeOut = async () => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }

  useEffect(() => {
    textAnimateTimeOut()
  }, [])

  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <span className={`${letterClass} _15 lettrine`}>A</span>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />

          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={21}
          />
        </h1>
        <p className='intitule'>Frontend Developer</p>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <GridProjects />
    </div>
    <Loader type='pacman'/>
    </>
  )
}

export default Home
