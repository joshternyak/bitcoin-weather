import React from "react";
import LightningBolt from "./lightning-bolt";

export default function Cloud({ theme, night }) {
  let cloudTheme = "";

  cloudTheme = night ? "night" : "light";
  cloudTheme = theme === "storm" ? "storm" : "";
  return (
    <>
      <div className="cloud-container">
        <img
          src={
            theme === "storm" || night
              ? "./static/images/dark-cloud.png"
              : "./static/images/light-cloud.png"
          }
          alt="cloud"
          className="Cloud1"
        />
        <img
          src={
            theme === "storm" || night
              ? "./static/images/dark-cloud.png"
              : "./static/images/light-cloud.png"
          }
          alt="cloud"
          className="Cloud2"
        />
        <img
          src={
            theme === "storm" || night
              ? "./static/images/dark-cloud.png"
              : "./static/images/light-cloud.png"
          }
          alt="cloud"
          className="Cloud3"
        />
        <img
          src={
            theme === "storm" || night
              ? "./static/images/dark-cloud.png"
              : "./static/images/light-cloud.png"
          }
          alt="cloud"
          className="Cloud4"
        />
      </div>
      {/* {theme === "storm" && <LightningBolt />} */}
      <style jsx>
        {`
          @keyframes CloudZoom {
            from {
              transform: scale(5) translate(-50%, -50%);
              filter: blur(30px);
              opacity: 0;
            }
            to {
              transform: scale(1) translate(-50%, -50%);
              filter: blur(0px);
              opacity: 1;
            }
          }
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
          .cloud-container {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            animation: CloudZoom 2s ease-out;
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
            transition: all 2s;
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
            transition: all 2s;
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
            transition: all 2s;
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
            transition: all 2s;
          }
        `}
      </style>
    </>
  );
}
