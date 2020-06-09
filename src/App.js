import React from 'react';
import logo from './logo.svg';
import Menu from './components/Menu'
import Home from './Sections/Home'
import About from './Sections/About'
import Projects from './Sections/Projects'
import Inquire from './Sections/Inquire'
import Container from 'react-bootstrap/Container'

import './App.css';

const App = () => {
  return (
    <Container  className='container-fluid m-0 p-0'>
      <Menu />
      <Home />
      <About />
      <Projects />
      <Inquire />
    </Container>
    
  )
}

export default App;
