import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; //you write {BrowserRouter as Router}
import Home from "./components/Home"
import About from "./components/About"
import NotFound from "./components/NotFound"

function App() {

  return (
    <>
      <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<NotFound/>} /> {/* path="*" Default for all non-declared path, you need to import it as component*/}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
