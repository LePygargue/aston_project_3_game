// /src/components/HomePage.js
import React from "react";
import "./HomePage.css";
import Header from "@/components/Header";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="hero">
          <div className="hero__button">
            <a className="hero__button-play" href="/authentication/login">
              Menez l'enquête
            </a>
          </div>
        </div>
        <div className="resume">
          <div className="resume__img"></div>
          <div className="resume__text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
              laborum earum fugit id odit nulla corporis veniam modi ipsam
              minima omnis in voluptatum voluptatem sunt unde. Consequatur
              magnam aut nobis?
            </p>
          </div>
        </div>
        <div className="introduction">
          <div className="introduction__content">
            <h2>Introduction</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque,
              dolore totam dolores earum eum necessitatibus illo unde voluptas,
              libero consectetur qui exercitationem facilis possimus temporibus
              quo accusamus mollitia. Expedita, nihil.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              odit exercitationem nam cumque explicabo error, culpa fugiat
              laborum velit ex aspernatur pariatur voluptate commodi
              voluptatibus, tempore sint ea, illo perspiciatis?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              odit exercitationem nam cumque explicabo error, culpa fugiat
              laborum velit ex aspernatur pariatur voluptate commodi
              voluptatibus, tempore sint ea, illo perspiciatis?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              odit exercitationem nam cumque explicabo error, culpa fugiat
              laborum velit ex aspernatur pariatur voluptate commodi
              voluptatibus, tempore sint ea, illo perspiciatis?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              odit exercitationem nam cumque explicabo error, culpa fugiat
              laborum velit ex aspernatur pariatur voluptate commodi
              voluptatibus, tempore sint ea, illo perspiciatis?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              odit exercitationem nam cumque explicabo error, culpa fugiat
              laborum velit ex aspernatur pariatur voluptate commodi
              voluptatibus, tempore sint ea, illo perspiciatis?
            </p>
          </div>
        </div>
        <div className="wiki">
          <div className="wiki__menu">
            <hr />
            <h2></h2>
            <div className="wiki__menu__items">
              <div></div>
            </div>
          </div>
          <div className="wiki__content">
            {/* Contenu dynamique en fonction du boutn du menu */}
            <div>
              <p>azdazd</p>
            </div>
          </div>
        </div>
        <footer className="footer"></footer>
      </div>
    </>
  );
};

export default HomePage;
