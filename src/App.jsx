import React, { Suspense, useState } from "react"
import { BrowserRouter, Routes, Route, useNavigate, Navigate, Router } from "react-router-dom"
import { navigation, Login } from "./Routes/navigation"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import "./styles/modes.css"
import NewContextProvider from "./Components/utils/Context"
import { ProtectedRoutes } from "./Components/utils/ProtectedRoutes"

function App() {

  const [darkMode, setDarkMode] = useState(false)

  function toggleMode() {
    setDarkMode(!darkMode)
  }

  return (
    <NewContextProvider>
    <Suspense fallback={<h1>Cargando...</h1>}>
        <BrowserRouter>
          <div className={ darkMode? "dark" : "light"}>
            <Navbar toggleMode={toggleMode} />
            <Routes>
            <Route path='/login' element={<Login />}/>
            <Route element={<ProtectedRoutes/>} />
            {
              navigation.map(({ id, path, Element }) => (
                <Route key={id} path={path} element={<Element />} />
              ))
            }
            <Route path='/' element={<Navigate to="/login" />}/>
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
    </Suspense>
    </NewContextProvider>
  )
}

export default App
