import React, { useState } from 'react';
import '../css/home.css'
import "../images/music-solid.svg"
import "../images/guitar-solid.svg"
import { redirect } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



export const Home = () => {



    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/sign-up');
    };
  

  

    return (
        <>
  <nav>
    <div className="logo">
      <a href="#">
        <img src="../images/music-solid.svg" alt="" />
      </a>
    </div>
    <div className="nav-elements-container">
      <div>
        <a className="nav-element sign-in" href="#">
          Sign In
        </a>
        <a className="nav-element sign-up" href="#">
          Sign Up
        </a>
      </div>
    </div>
  </nav>
  <section className="homepage">
    <div className="main-content"></div>
    <div className="animation">
      <img src="../animation.gif" alt="" />
    </div>
    <div className="features">
      <h1 data-value="Change the way you listen to" className="engage">
        Change the way you listen to{" "}
        <span data-value="music" style={{ color: "#83B692" }}>
          music
        </span>
      </h1>
      <p className="engage">
        Music is life. Change the way you listen to it, with our intuitive
        interface and responsiveness, you will feel the music in your heart!
      </p>
      <div className="btn-div">
        <input
          style={{}}
          type="button"
          defaultValue="Sign up"
          className="eng-btn"
          onClick={handleClick}
        />
        <input type="button" defaultValue="Learn more" className="eng-btn" />
      </div>
    </div>
  </section>
</>
    )

}