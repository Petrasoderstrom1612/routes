import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; //you write {BrowserRouter as Router}
import Home from "./components/Home"
import NotFound from "./components/NotFound"

function App() {

  return (
    <>
      <BrowserRouter>
      <Link to="/home">Home</Link>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="*" element={<NotFound/>} /> {/* path="*" Default for all non-declared path, you need to import it as component*/}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
