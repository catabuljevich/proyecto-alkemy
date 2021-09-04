import React from "react";
import Card from "./Card";

function CardList({ results }) {
  let data = [];
  if (results.data) {
    data = results.data.results || [];
  }

  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("new hero was added to your team");
  };
  return (
    <div className="result">
      {data.map((item) => (
        <Card key={item.id} hero={item} onClick={clickHandler} />
      ))}
    </div>
  );
}

export default CardList;
