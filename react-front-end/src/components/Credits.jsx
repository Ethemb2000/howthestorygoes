import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

import "../styles/Credits.scss";

const Credits = () => {
  const [showButton, setShowButton] = useState("none");
  const intro = useRef();
  // const title = useRef();
  const content = useRef();

  useEffect(() => {
    let tl = new gsap.timeline();

    tl.to(intro.current, { opacity: 1, delay: 1, duration: 5 })
      .to(intro.current, { opacity: 0, duration: 1.5 })
      // If we want to add a logo at the start of the credits?
      // .set(title.current, { opacity: 1, scale: 2.75 })
      // .to(title.current, { scale: 0.05, ease: "power2", duration: 8 })
      // .to(title.current, { opacity: 0, duration: 1.5 }, "-=1.5")
      .to(content.current, { top: "-666%", duration: 60 });
  }, []);

  useEffect(() => {
    document.getElementById("play-again-victory").style.display = showButton;
    setTimeout(() => {
      setShowButton("flex");
    }, 45000);
  }, [showButton]);

  return (
    <div id="credits">
      <div className="container">
        <section className="intro" ref={intro}>
          <p>YOU SAVED THE PLANET!</p>
        </section>
        {/* <section className="title" ref={title}></section> */}
        <section className="crawl">
          <div className="content" ref={content}>
            <h1 className="subtitle">A QUEST FOR THE</h1>
            <h2 className="episode-title">SAPPHIRE MONKEY</h2>
            <h1 className="subtitle">Created By</h1>
            <p>Jennifer Bain</p>
            <p>David Jardine</p>
            <p>Keagan Ricciuti</p>
            <h1 className="subtitle">Tech Stack</h1>
            <p>Node</p>
            <p>Express</p>
            <p>PSQL</p>
            <p>Axios</p>
            <p>Phaser</p>
            <p>React</p>
            <p>React Router Dom</p>
            <p>React Spring</p>
            <p>React Sound</p>
            <p>Node Sass</p>
            <p>GreenSock Animation Platform</p>
            <h1 className="subtitle">Art and Music</h1>
            <p>Tilesheet Art - Eder Muniz</p>
            <p>Music - Three Red Hearts by Abstraction</p>
            <h1 className="subtitle">Special Thanks To</h1>
            <p>Andy Lindsay</p>
            <p>Travis Borsa</p>
            <p>Hafiz Suara</p>
            <p>Jeremy Holman</p>
            <p>Karl Jensen</p>
            <p>Gary Jipp</p>
            <p>Francis Bourgouin</p>
            <p>Garrett Brick</p>
            <p>Shannon Jaeger</p>
            <p>Mark Zsombor</p>
            <p>Brian Chang</p>
            <p>Sarah Nicholson</p>
            <p>Max Kovalenkov</p>
            <p>Emile Cantin</p>
            <p>Justin Henderiks</p>
            <p>Mikaal Naik</p>
            <p>Andrew Hsieh</p>
            <p>Bradley Fung</p>
            <p>Glen Chua</p>
            <p>Diogo Pinto</p>
            <p>Caroline Lauder</p>
            <p>Kelly (K-Fox)</p>
            <p>Ryan Dee</p>
            <p>Mom and Dad</p>
            <p>Our Pets</p>
            <p>Kim, Dano and James</p>
          </div>
        </section>
      </div>
      <a href="/">
        <button id="play-again-victory">Play Again</button>
      </a>
    </div>
  );
};

export default Credits;
