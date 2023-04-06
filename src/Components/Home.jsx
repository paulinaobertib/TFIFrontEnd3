import React from 'react'
import { useNavigate } from 'react-router-dom'
import Dentists from "./Dentists"

const Home = () => {

    const navigate = useNavigate();

    return (
        <div>
            <div>
                <h1>Home</h1>
                <button onClick={ () => navigate(-1)}>Volver</button>
                <Dentists />
            </div>
        </div>
    )

}

export default Home