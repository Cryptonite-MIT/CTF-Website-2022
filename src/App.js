import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFlag } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import Timer from './components/Timer'
import Footer from './components/Footer'
import BitCoin from './components/Bitcoin';
import Header from './components/Header';
import GLOBE from 'vanta/dist/vanta.globe.min'
import gcpLogo from './logo_googleCloud.png'

function App() {
  const reference = useRef(0);
  const [vantaEffect, setVantaEffect] = useState(0);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(GLOBE({
        el: reference.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        color: 0x0b9444,
        color3: 0xffffff,
        backgroundColor: 0x0e081a
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect]);
  return (
    <div className="app">
      <div id="splash-screen" className="splash-screen" ref={reference}>
      </div>
      <div className="actual-text">
        <Header/>
        <div className="banner-cont">
          <h1>niteCTF</h1>
        </div>
        <div className="content-cont">
          <div className="content">
            <p>niteCTF is a jeopardy style CTF for students interested in cybersecurity. niteCTF is designed to help students explore newer domains in cybersecurity as well as help existing professionals practise their skills. We will feature challenges which cover various domains of cybersecurity including cryptography, reversing, forensics, web exploitation, pwn and more!
            </p>
            <p>We will also have exciting prizes for the teams that come 1st, 2nd or 3rd in the CTF</p>
            <p><h3><Timer/> to go!</h3></p>
            <p><small>Infra sponsored by <a href="https://g.co/cloud"><img className="content-google-cloud-logo" src={gcpLogo} alt="Google Cloud"></img></a></small></p>
            <p>
              <a href="https://discord.gg/thTagHkyWB" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faDiscord}/></a>&nbsp;
              <a href="https://www.facebook.com/cryptonitemanipal/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook}/></a>&nbsp;
              <a href="https://www.instagram.com/cryptonite_mit/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram}/></a>&nbsp;
              <a href="https://www.linkedin.com/company/cryptonite-mit" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a>&nbsp;
              <a href="https://github.com/Cryptonite-MIT" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}/></a>&nbsp;
              <a href="https://ctftime.org/team/62713" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFlag}/></a>&nbsp;
            </p>
          </div>
        </div>
        <Footer/>
        <BitCoin/>
      </div>
    </div>
  );
}

export default App;
