import React, { useContext } from 'react';
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/globalContext";
import { useNavigate } from 'react-router-dom'

const Favs = () => {

  const navigate = useNavigate();

  const dentists = JSON.parse(localStorage.getItem('favorites')) || [];

  return (
    <div>
      <h1>Dentists Favs</h1>
      <button onClick={ () => navigate(-1)}>Volver</button>
      <div className='card-grid'>
        {
          dentists.map(dentist => <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id} />)
        }
      </div>
    </div>
  );
};


export default Favs;