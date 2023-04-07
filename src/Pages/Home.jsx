import React from 'react'
import { useNavigate } from 'react-router-dom'
import Dentists from "../Components/Dentists"

const Home = () => {

    const navigate = useNavigate();

    return (
        <div>
            <div>
                <h1>Dentistas</h1>
                <h2>Página Principal</h2>
                <button onClick={ () => navigate(-1)}>Volver</button>
                <Dentists />
            </div>
        </div>
    )

}

export default Home