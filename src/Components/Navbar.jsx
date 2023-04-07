import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ toggleMode }) => {

  return (
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/favs">Favs</Link>
      <Link to="/contact">Contacto</Link>
      <button onClick={toggleMode}>Change theme</button>
    </nav>
  )
}

export default Navbar