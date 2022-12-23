import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFlag } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import Timer from './components/Timer'
import Footer from './components/Footer'
import BitCoin from './components/Bitcoin';
import Header from './components/Header';
import NET from 'vanta/dist/vanta.net.min'

import "@fontsource/vt323";
// import gcpLogo from './logo_googleCloud.png'

function App() {
  const reference = useRef(0);
  const [vantaEffect, setVantaEffect] = useState(0);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: reference.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        color: 0x20C20E,
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
          <h1>niteCTF 2022</h1>
        </div>
        <div className="content-cont">
          <div className="content">
            <p>niteCTF is a jeopardy style CTF for students interested in cybersecurity. niteCTF is designed to help students explore newer domains in cybersecurity as well as help existing professionals practise their skills. We will feature challenges which cover various domains of cybersecurity including cryptography, reversing, forensics, web exploitation, pwn and more!
            </p>
            <p>Registrations are open!</p>
            {/* <p>1st place - 8000 INR<br/>2nd place - 5000 INR<br/>3rd place - 3000 INR</p> */}
            <p><h3><Timer/> </h3></p>
            {/* <p><small>Infra sponsored by <a href="https://g.co/cloud"><img className="content-google-cloud-logo" src={gcpLogo} alt="Google Cloud"></img></a></small></p> */}
            <p>
              <a href="https://discord.gg/G2T2yWzK" class="discord-button">Join Our Discord</a>&nbsp;
              <a href="https://nite-trial12022.el.r.appspot.com/login" class="event-button">Event Page</a> <br></br>&nbsp;
              <br></br> &nbsp; &nbsp;
              {/* <a href="https://discord.gg/thTagHkyWB" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faDiscord}/></a>&nbsp; */}
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
