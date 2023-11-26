import React, { useEffect, useState, useRef } from 'react'
import './index.scss'
import '../Globalstyles/pageTypeGlobal.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  const textAnimateTimeOut = async () => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }

  useEffect(() => {
    textAnimateTimeOut()
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_1d649nf',
        'template_l9byn22',
        refForm.current,
        'Z95UYrtq1fGmtTzMh'
      )
      .then(
        () => {
          alert('Votre message a été envoyé !')
          window.location.reload(false)
        },
        () => {
          alert(
            "Votre message n'a pas été envoyé correctement, veuillez essayer à nouveau s'il vous plaît."
          )
        }
      )
  }
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <div>
                  <label htmlFor="name">Nom et prénom :</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Nom"
                    required
                  />

                  <label htmlFor="email">Email :</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="abc@def.gh"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject">Sujet :</label>
                  <input
                    id="subject"
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message">Votre message :</label>
                  <textarea
                    id="message"
                    placeholder="Message."
                    name="message"
                    required
                  ></textarea>
                </div>
                <div>
                  <input type="submit" className="flat-button" value="SEND" />
                </div>
              </ul>
            </form>
          </div>
        </div>
        <div>
          <h2>Je suis là !</h2>
          <div className="map-wrapper">
            <MapContainer center={[48.9301254, 2.0470655]} zoom={14}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[48.9301254, 2.0470655]}>
                <Popup>J'habites à Poissy !</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
