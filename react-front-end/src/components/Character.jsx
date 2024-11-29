import React, { useState, useEffect } from "react";
import { useSpring, animated as a } from "react-spring";
import "../styles/TitlePage.scss";

const Character = (props) => {
  const { color, chooseColor, currentColor, name, info } = props;

  //React Spring setup for flipping cards
  const [flipped, setFlipped] = useState(false);
  //variables used to make sprite walk on hover
  const [hover, setHover] = useState(false);
  const [xPosition, setXPosition] = useState(0);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 150 },
  });

  //conditioned to only run on a mouse hover
  useEffect(() => {
    if (!hover) return;
    const interval = setInterval(() => {
      setXPosition((prev) => {
        if (prev < 64) {
          return prev + 32;
        } else {
          return 0;
        }
      });
    }, 200);
    return () => clearInterval(interval);
  }, [hover, xPosition]);

  //JSX styling for dynamic component rendering
  const characterStyles = {
    margin: "1em",
    height: "32px",
    width: "32px",
    backgroundImage: `url(/assets/character_sprites/sprite_${color}.png)`,
    //choosing 32x32px starting in the top, left corner to render single front view of each character
    backgroundPosition: `${xPosition}px 0px`,
  };

  const cardStyleBack = {
    backgroundImage: `url(/assets/cards/card_${color}.png)`,
    boxShadow:
      currentColor === color
        ? "0 14px 28px #71716c, 0 10px 10px #71716c"
        : "none",
    opacity,
    transform: transform.interpolate((t) => `${t} rotateY(180deg)`),
    display: "flex",
    flexDirection: "column",
    padding: "15px",
    textAlign: "center",
  };

  const cardStyleFront = {
    ...cardStyleBack,
    opacity: opacity.interpolate((o) => 1 - o),
    transform,
  };

  return (
    <div
      className="card-container"
      onClick={() => chooseColor(color)}
      onDoubleClick={() => setFlipped((prev) => !prev)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <a.div className="card-style" style={cardStyleBack}>
        <h3>{name}</h3>
        <p>{info}</p>
      </a.div>

      <a.div className="card-style" style={cardStyleFront}>
        <div className="single-character" style={characterStyles} />
      </a.div>
    </div>
  );
};

export default Character;
