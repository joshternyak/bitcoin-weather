import React from "react";

export default function Sun() {
  return (
    <>
      <img src={"./static/images/sun.png"} alt="sun" className="Sun" />
      <style jsx>
        {`
          .Sun {
            position: fixed;
            border-radius: 50%;
            left: -58px;
            top: 75px;
            max-width: 250px;
            animation: sun-glow 3s infinite alternate ease-in-out;
          }

          @keyframes sun-glow {
            0% {
              opacity: 1;
              box-shadow: 50px 50px 100px 20px rgba(255, 216, 147, 0.58);
            }
            100% {
              box-shadow: 10px 10px 60px 10px rgba(255, 216, 147, 0.58);
            }
          }
        `}
      </style>
    </>
  );
}
