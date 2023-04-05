import React from 'react'
import { useNavigate } from 'react-router-dom'
import Dentist from "./Dentist"

const Home = () => {

    const navigate = useNavigate();

    const selectDentist = (id) => {
        navigate(`home/dentist/${id}`)
    }

    return (
        <div>
            <div>
                <h1>Home</h1>
                <button onClick={ () => navigate(-1)}>Volver</button>
            </div>
            <Dentist selectDentist={selectDentist} />
        </div>
    )

}

export default Home