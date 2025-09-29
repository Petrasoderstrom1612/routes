import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"; //you write {BrowserRouter as Router}
import Home from "./pages/Vans/Home"
import About from "./pages/Vans/About"
import NotFound from "./pages/NotFound"
import Vans from "./pages/Vans/Vans"
import VanDetails from "./pages/Vans/VanDetails"
import Layout from './components/Layout';
import HostLayout from './components/HostLayout';
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import HostVans from "./pages/Host/HostVans"
import HostVansDetails from "./pages/Host/HostVansDetails"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home/>}/>

            <Route path="host" element={<HostLayout/>}> {/* this acts yet as another layout that layers on the side, you need outlet not to override the children*/}
              <Route path="income" element={<Income/>}/>
              <Route path="reviews" element={<Reviews/>}/>
              <Route path="vans" element={<HostVans/>}/>
              <Route path="vans/:id" element={<HostVansDetails/>}/>
              <Route index element={<Dashboard />} />
            </Route>

            <Route path="about" element={<About/>}/>
            <Route path="vans" element={<Vans/>}/> {/* the route to the component*/}
            <Route path="vans/:id" element={<VanDetails/>}/>
            <Route path="*" element={<NotFound/>} /> {/* path="*" Default for all non-declared path, you need to import it as component*/}

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
