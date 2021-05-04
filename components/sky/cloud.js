import React from "react";
import LightningBolt from "./lightning-bolt";

export default function Cloud({ theme, night }) {
  return (
    <>
      <img
        src={
          night
            ? "./static/images/dark-cloud.png"
            : "./static/images/light-cloud.png"
        }
        alt="cloud"
        className="Cloud"
      />
      {theme === "storm" && <LightningBolt />}
      <style jsx>
        {`
          .Cloud {
            position: fixed;
            right: -50px;
            top: 100px;
            max-width: 275px;
          }
        `}
      </style>
    </>
  );
}
