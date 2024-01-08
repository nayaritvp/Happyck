import {Navigate, Route ,Routes } from "react-router-dom"
import { Home } from "./view/Home"
import { Contacto } from "./view/Contacto"
import { NotFound } from "./view/NotFound"
import { Navbar } from "./components/Navbar"

function App() {

  return (
    <>
    <Navbar/>
    <div className="container">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
        <Route path="/red" element={<Navigate to="/"/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
