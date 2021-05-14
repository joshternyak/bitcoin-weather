import React from "react";
import LightningBolt from "./lightning-bolt";

export default function Cloud({ theme, night }) {
  let cloudTheme = "";

  cloudTheme = night ? "night" : "light";
  cloudTheme = theme === "storm" ? "storm" : "";
  return (
    <>
      <img
        src={"./static/images/" + cloudTheme + "-cloud.png"}
        alt="cloud"
        className="Cloud1"
      />
      <img
        src={"./static/images/" + cloudTheme + "-cloud.png"}
        alt="cloud"
        className="Cloud2"
      />
      <img
        src={
          theme === "storm"
            ? "./static/images/dark-cloud.png"
            : "./static/images/light-cloud.png"
        }
        alt="cloud"
        className="Cloud3"
      />
      <img
        src={
          theme === "storm"
            ? "./static/images/dark-cloud.png"
            : "./static/images/light-cloud.png"
        }
        alt="cloud"
        className="Cloud4"
      />
      {/* {theme === "storm" && <LightningBolt />} */}
      <style jsx>
        {`
          @keyframes Cloud1 {
            from {
              margin-left: 250px;
            }
            to {
              margin-left: 290px;
            }
          }
          @keyframes Cloud2 {
            from {
              margin-left: -400px;
            }
            to {
              margin-left: -360px;
            }
          }
          @keyframes Cloud3 {
            from {
              margin-left: -600px;
            }
            to {
              margin-left: -560px;
            }
          }
          @keyframes Cloud4 {
            from {
              margin-left: 600px;
            }
            to {
              margin-left: 640px;
            }
          }
          .Cloud1 {
            position: fixed;
            transform: translate(-50%, -50%);
            top: 50%;
            margin-top: -50px;
            margin-left: 250px;
            left: 50%;
            max-width: 650px;
            animation: Cloud1 3s ease-in-out infinite alternate;
          }
          .Cloud2 {
            position: fixed;
            transform: translate(-50%, -100%);
            top: 50%;
            margin-left: -400px;
            left: 50%;
            filter: blur(12px);
            opacity: 0.8;
            max-width: 450px;
            animation: Cloud2 3s ease-in-out infinite alternate;
            animation-delay: 0.5s;
          }
          .Cloud3 {
            position: fixed;
            transform: translate(-50%, 25%);
            top: 50%;
            margin-left: -600px;
            left: 50%;
            filter: blur(4px);
            max-width: 450px;
            animation: Cloud3 3s ease-in-out infinite alternate;
            animation-delay: 1s;
          }
          .Cloud4 {
            position: fixed;
            transform: translate(-50%, 70%);
            top: 50%;
            margin-left: 600px;
            left: 50%;
            max-width: 450px;
            filter: blur(12px);
            animation: Cloud4 3s ease-in-out infinite alternate;
            animation-delay: 1.5s;
          }
        `}
      </style>
    </>
  );
}
