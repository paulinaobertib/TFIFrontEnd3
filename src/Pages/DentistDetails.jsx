import React, { useEffect, useState } from 'react' 
import { useParams, useNavigate} from 'react-router-dom';

const DentistDetails = () => {

    const navigate = useNavigate();

    const [dentist, setDentist] = useState()
    const {id} = useParams()

    const infoDentista = `https://jsonplaceholder.typicode.com/users/${id}`

    const getDentist = async () => {
        const response = await fetch(infoDentista);
        const resolve = await response.json();
        setDentist(resolve)
    }

    useEffect(() => {
        getDentist();
    },[])

    return (
        <div className='detailsDent'>
            <h1>Detalles del dentista seleccionado: </h1>
            <button onClick={ () => navigate(-1)}>Volver</button>
            <div className='detailEach'>
                <img src="./../../public/images/doctor.jpg" alt="dentista"/>
                <p>{dentist?.name}</p>
                <p>{dentist?.username}</p>
                <p>{dentist?.email}</p>
                <p>{dentist?.phone}</p>
                <p>{dentist?.website}</p>
            </div>
        </div>
    )
}

export default DentistDetails