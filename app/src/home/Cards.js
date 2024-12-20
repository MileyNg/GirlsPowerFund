import React from "react";
import "../App.css"; 

function Cards() {
  const cardData = [
    {
      title: "Education",
      image: "path_to_image_1", // Replace with actual image path or URL
      description:
        "Our approach fosters creativity, critical thinking, and collaboration. Learners leave with confidence and the tools needed to succeed in dynamic environments.",
    },
    {
      title: "Representation",
      image: "path_to_image_2", // Replace with actual image path or URL
      description:
        "We bring inspirational female speakers and leaders to share their journeys, encouraging ambition and inclusivity. Empowers individuals to envision and achieve their goals.",
    },
    {
      title: "Education",
      image: "path_to_image_3", // Replace with actual image path or URL
      description:
        "Our approach fosters creativity, critical thinking, and collaboration. Learners leave with confidence and the tools needed to succeed in dynamic environments.",
    },
  ];

  return (
    <div className="cards-container">
      <div className="cards">
        {cardData.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} alt={card.title} className="card-image" />
            <h2 className="card-title">{card.title}</h2>
            <p className="card-description">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
