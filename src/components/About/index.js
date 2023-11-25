import React, { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const textAnimateTimeOut = async () => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }

  useEffect(() => {
    textAnimateTimeOut()
  }, [])
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
          letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>C'est ici</p>
        <p>Que je dois</p>
        <p>Me vanter à fond et donner des infos</p>
      </div>
    </div>
  )
}

export default About
