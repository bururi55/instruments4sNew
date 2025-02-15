import React from "react";
import "./Snowflakes.css"; // Импортируем CSS файл

const Snowflakes = () => {
  return (
    <div className="raindrops">
      <div
        className="raindrop"
        style={{ left: "10%", animationDuration: "5s", animationDelay: "0s" }}
      ></div>
      <div
        className="raindrop"
        style={{ left: "20%", animationDuration: "4s", animationDelay: "1s" }}
      ></div>
      <div
        className="raindrop"
        style={{ left: "30%", animationDuration: "6s", animationDelay: "2s" }}
      ></div>
      <div
        className="raindrop"
        style={{ left: "40%", animationDuration: "5s", animationDelay: "3s" }}
      ></div>
      <div
        className="raindrop"
        style={{ left: "50%", animationDuration: "4s", animationDelay: "4s" }}
      ></div>
      <div
        className="raindrop"
        style={{ left: "60%", animationDuration: "6s", animationDelay: "5s" }}
      ></div>
      <div
        className="raindrop"
        style={{ left: "70%", animationDuration: "5s", animationDelay: "6s" }}
      ></div>
      <div
        className="raindrop"
        style={{ left: "80%", animationDuration: "4s", animationDelay: "7s" }}
      ></div>
      <div
        className="raindrop"
        style={{ left: "90%", animationDuration: "6s", animationDelay: "8s" }}
      ></div>
    </div>
  );
};

export default Snowflakes;

//снежинки
/*
const Snowflakes = () => {
  return (
    <div className="snowflakes" aria-hidden="true">
      <div className="snowflake">❅</div>
      <div className="snowflake">❆</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❆</div>
      
    </div>
  );
};

export default Snowflakes;
*/
