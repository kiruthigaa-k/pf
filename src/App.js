import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Qualification from './components/qualification/Skills';
import Contact from './components/contact/Contact';

const App =()=> {
  return (
    <>
    <Header/>
    <main className='main' >
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Qualification/>
      <Contact/>
    </main>
    </>
  )
}

export default App;
