/*import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App*/
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills' 
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  return (
    <>
    <Navbar/>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer/>
    </>
  )
}
export default App




