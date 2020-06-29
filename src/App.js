import React from 'react';
import logo from './logo.svg';
import Menu from './components/Menu'
import Home from './Sections/Home'
import About from './Sections/About'
import Projects from './Sections/Projects'
import Inquire from './Sections/Inquire'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Particles from 'react-particles-js'
import './App.css';


const particleOptions = {
  background: {
    color: {
      value: "#333333"
    }
  },
  particles: {
    number: {
      value: 150,
      max: -1,
      density: {
        enable: true,
        value_area: 1200
      }
    },
    color: {
      value: "#FFF"
    },
    shape: {
      type: "square"
    },
    size: {
      value: 2,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0,
        sync: false
      }
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: false,
      out_mode: "bounce",
      bounce: true
    },
  },
  interactivity: {
    detectsOn: "window",
    events: {
      onHover: {
        enable: true,
        mode: "grab",
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 200,
        line_linked: {
          opacity: 0.7
        }
      },
      bubble: {
        distance: 200,
        size: 60,
        duration: 0.8
      }
    }
  },
  retina_detect: true,
  fps_limit: 120,
}

const App = () => {
  return (
    <div>
    <Particles
        className="particles"
        params={particleOptions}
      />
    
    <Container  fluid className='m-0 p-0'>
      <Menu className="row"/>
      <Home />
      <About className='row fluid mb-10'/><br />
      <Row className="justify-content-md-center">
        <Projects className='row fluid mt-100' />
      </Row>
      <Row className="justify-content-md-center">
        <Inquire />
      </Row>
    </Container>
    </div>
  )
}

export default App;
