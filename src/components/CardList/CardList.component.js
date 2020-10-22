import React from "react";
import Card from "../Card/card.component";
import "./CardList.styles.css";
const CardList = ({ children, monsters }) => {
  console.log(children);
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
