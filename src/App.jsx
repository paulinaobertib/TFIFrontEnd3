import React, { Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { navigation } from "./Routes/navigation"

function App() {

  return (
    <Suspense fallback={<h1>Cargando...</h1>}>
        <BrowserRouter>
          <Routes>
            {
              navigation.map(({ id, path, Element }) => (
                <Route key={id} path={path} element={<Element />} />
              ))
            }
          </Routes>
        </BrowserRouter>
    </Suspense>
  )
}

export default App
