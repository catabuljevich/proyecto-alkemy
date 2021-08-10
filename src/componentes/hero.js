import axios from "axios";
import React, { useState, useEffect } from "react";
import ApiUrl from "../services/apirest";

const Hero = () => {
  const [heroes, setHeroes] = useState([]);

  const getUsers = async () => {
    const response = await axios.get(ApiUrl);
    const heroes = await response.json();
    setHeroes(heroes);
    console.log(heroes);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="container">
      <h3>Listado de Superheroes:</h3>
      <ul className="heroes">
        {heroes.map((heroe) => {
          const {
            id,
            powerstats,
            biography,
            appearence,
            work,
            connections,
            image,
          } = heroe;
          return (
            <li key={id}>
              <img src={image} alt={id} />
              <div>
                <h4>{powerstats}</h4>
                <h4>{biography}</h4>
                <h4>{appearence}</h4>
                <h4>{work}</h4>
                <h4>{connections}</h4>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Hero;
