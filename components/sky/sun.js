import React from "react";

export default function Sun() {
  return (
    <>
      <img src={"./static/images/sun.png"} alt="sun" className="Sun" />
      <style jsx>
        {`
          .Sun {
            position: fixed;
            left: -58px;
            top: 75px;
            max-width: 164px;
            box-shadow: 7px 7px 24px #fdb052, inset -15px -15px 40px #ffa048;
            border-radius: 50%;
            animation-duration: 3s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
            animation-name: sun-glow;
          }

          @keyframes sun-glow {
            0%,
            100% {
              opacity: 1;
              box-shadow: 7px 7px 24px #fdb052, inset -15px -15px 40px #ffa048;
            }
            25%,
            75% {
              opacity: 0.9;
              filter: blur(0.25px);
              box-shadow: 5px 5px 10px #fdb052, inset -15px -15px 40px #ffa048;
            }
            50% {
              opacity: 0.8;
              filter: blur(0.5px);
              box-shadow: 3px 3px 7px #fdb052, inset -15px -15px 40px #ffa048;
            }
          }
        `}
      </style>
    </>
  );
}
