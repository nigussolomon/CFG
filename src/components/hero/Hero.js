import React from "react";
import "./hero.css";
import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";
import myImg from "../../assets/moni1.png";

const paintings = [
  { name: myImg },
  { name: myImg },
  { name: myImg },
  { name: myImg },
  { name: myImg },
  { name: myImg },
  { name: myImg },
];

const cardTemp = (paintings) => {
  return (
    <div className="card">
      <img src={paintings.name} alt="error" />
    </div>
  );
};

export default function Hero() {
  return (
    <div className="hero">
      <div className="textHero">
        <h1>Hi I'm Moni, and I love painting.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero nesciunt dolorum obcaecati fugiat repellat iste quis facilis accusamus veritatis eveniet excepturi vel saepe voluptas nostrum rerum molestiae, at quam quos.</p>
        <Button  className="contactMe" >CONTACT ME NOW</Button>
      </div>
      <div className="imgHero">
        <Carousel
          value={paintings}
          numVisible={1}
          numScroll={1}
          itemTemplate={cardTemp}
          autoplayInterval={3500}
          circular={true}
          showIndicators={false}
        />
      </div>
    </div>
  );
}
