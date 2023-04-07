import React, { Suspense, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { navigation } from "./Routes/navigation"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import "./styles/modes.css"

function App() {

  const [darkMode, setDarkMode] = useState(false)

  function toggleMode() {
    setDarkMode(!darkMode)
  }

  return (
    <Suspense fallback={<h1>Cargando...</h1>}>
        <BrowserRouter>
          <div className={ darkMode? "dark" : "light"}>
            <Navbar toggleMode={toggleMode} />
            <Routes>
            {
              navigation.map(({ id, path, Element }) => (
                <Route key={id} path={path} element={<Element />} />
              ))
            }
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
    </Suspense>
  )
}

export default App
