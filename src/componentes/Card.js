import React from "react";

function Card(props) {
  const { hero } = props;

  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("new hero was added to your team");
  };

  return (
    <div className="search-result ">
      <div className="left">
        <img src={hero.image.url} alt={hero.name} className="hero_img" />
      </div>
      <div className="right">
        <h1>{hero.name}</h1>
        <span style={{ color: "gray", marginBottom: 5 }}>
          {hero.biography["full-name"]}
        </span>
        <div className="stats">
          <div>
            Powerstats
            <h4> Combat : {hero.powerstats.combat}</h4>
            <h4> Durability : {hero.powerstats.durability}</h4>
            <h4> Intelligence : {hero.powerstats.intelligence}</h4>
            <h4> Power : {hero.powerstats.power}</h4>
            <h4> Stength : {hero.powerstats.strength}</h4>
            <h4> Speed : {hero.powerstats.speed}</h4>
          </div>
          <button className="btn" onClick={clickHandler}>
            Add to MY TEAM
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
