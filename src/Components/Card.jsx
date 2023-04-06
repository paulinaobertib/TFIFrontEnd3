import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ name, username, id }) => {

  const navigate =  useNavigate();
  
  const Fav = () => {
    
  };
  
  const selectDentist = () => {
    navigate(`/home/dentist/${id}`);
  };

  return (
    <div>
        <section onClick={selectDentist}>
          <img src="./../../public/images/doctor.jpg" alt="dentista"/>
        </section>
        <p>{id}</p>
        <p>{name}</p>
        <p>{username}</p>
        <button onClick={Fav} className="favButton">FAV</button>
    </div>
  );
};

export default Card;