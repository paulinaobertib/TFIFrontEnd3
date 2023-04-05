import React from 'react'
import axios from 'axios'
import { useQuery } from "react-query"

const dentistInfo = "https://jsonplaceholder.typicode.com/users"

const getDentist = () => axios.get(dentistInfo)

const Dentist = () =>  {
    const queryResponse = useQuery("dentist", getDentist);
    return (
        <div>
            
        </div>
    )
}

export default Dentist