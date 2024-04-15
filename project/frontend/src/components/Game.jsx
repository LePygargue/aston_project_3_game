// /src/components/HomePage.js
import React from "react";
import { Link } from "react-router-dom";
import "./Game.css";

const HomeGame = () => {
  return (
    <div className="game__container">
      <div className="game__header">
        <div className="game__header__options">
          <ul>
            <li>
              <a href="/">
                <img src="home.svg" alt="icon home" />
              </a>
            </li>
            <li>
              <a href="/game/profil">
                <img src="user.svg" alt="icon user" />
              </a>
            </li>
            <li>
              <a href="/game/help">
                <img src="question-mark.svg" alt="icon question-mark" />
              </a>
            </li>
          </ul>
        </div>
        <div className="game__header__logo">
          <img src="logo.png" />
        </div>
      </div>
      <div className="game">
        <div className="game__leftMenu">
          <ul className="game__leftMenu__buttons">
            <div className="haut">
              <li>
                <a className="leftMenu__buttons-style" href="/game">
                  Personnage
                </a>
              </li>
              <li>
                <a className="leftMenu__buttons-style" href="/game">
                  Journal
                </a>
              </li>
              <li>
                <a className="leftMenu__buttons-style" href="/game">
                  Inventaire
                </a>
              </li>
            </div>
            <li>
              <a className="leftMenu__buttons-style-last" href="/game">
                Carte
              </a>
            </li>
          </ul>
        </div>
        <div className="game__screen">
          <div className="game__screen_location">
            <img src="" alt="" />
          </div>
          <div className="game__screen_interface">
            <div className="interface__image"></div>
            <div className="interface__text">
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeGame;
