import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {

  const navigate = useNavigate();

  return (
    <>
    <h1>No existe la direccion ingresada</h1>
    <button onClick={ () => navigate(-1)}>Volver</button>
    </>
  )

}

export default Error