import { useState } from "react";
import Project from "./Project";

const Carousel = () => {
  const projects = [
    {
      id: 1,
      title: "QuickFix",
      description:
        "An advanced bug reporting system using Flask that allows users on the same software development project to keep track of ongoing bugs within each sprint",
      image: "quickfix_icon.ico",
      github: "https://github.com/Karishvan/QuickFix",
    },
    {
      id: 2,
      title: "MedVisor",
      description:
        " A simple web application survey that gathers data of the user's symptoms and uses Machine Learning to provide a suggestion of the doctor they should visit",
      image: "MedVisor.png",
      github: "https://github.com/Karishvan/MedVisor",
    },
    {
      id: 3,
      title: "MyAudio",
      description:
        "A Java terminal application using OOP and data structures like HashMaps that simulates a music app, allowing users to create playlists and play songs and audiobooks",
      image: "music.png",
      github: "https://github.com/Karishvan/MyAudio",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`carousel-item ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <Project
              title={project.title}
              image={`images/${project.image}`}
              github={project.github}
            >
              {project.description}
            </Project>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
        onClick={prevSlide}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
        onClick={nextSlide}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
