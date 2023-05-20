import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Css/styles.css";
import Card from "./Card";

const LoadSts = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      title: "SQLQueries",
      description: "Add queries",
      linkTo: "/load-sts-query",
    },
    {
      title: "File",
      description: "Upload a file",
      linkTo: "/load-sts-file",
    },
    {
      title: "Database",
      description: "Existing STS",
      linkTo: "/load-sts-database",
    },
  ];

  return (
    <div className=" form">
      <h4>Load SQL Tuning Set by:</h4>
      <br />
      <br />
      <br />
      <div className="parent-container">
        <div className="card-container">
          {cards.map((card, index) => (
            <Link key={index} to={card.linkTo}>
              <Card
                title={card.title}
                description={card.description}
                isSelected={selectedCard === index}
              />
            </Link>
          ))}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default LoadSts;
