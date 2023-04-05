import React, { Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { navigation } from "./Routes/navigation"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"

function App() {

  return (
    <Suspense fallback={<h1>Cargando...</h1>}>
        <BrowserRouter>
          <div>
            <Navbar />
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
