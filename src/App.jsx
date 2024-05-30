import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import About from './pages/about/About'
import Home from './pages/home/Home'
import Media from './pages/media/Media'
import What from './pages/what/What'
import Contact from './pages/contact/Contact'
import Footer from './Footer'
import Donate from './pages/donate/Donate'
import Project from './pages/project/Project'



function App() {


  return (
    <div className="app">
      <div className="header">
        <Navbar />
      </div>
      <main className="main">
        <Routes>
          <Route path='about' element={<About />} />
          <Route path='/' element={<Home />} />
          <Route path='media' element={<Media />} />
          <Route path='what' element={<What />} />
          <Route path='contact' element={<Contact />} />
          <Route path='donate' element={<Donate />} />
          <Route path='project' element={<Project />} />
        </Routes>
      </main>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}

export default App
