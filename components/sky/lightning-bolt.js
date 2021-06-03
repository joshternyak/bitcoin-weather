import React from "react";

export default function LightningBolt() {
  return (
    <>
      {/* <img
        src="./static/images/lightning-bolt.png"
        alt="lightning bolt"
        className="LightningBolt"
      /> */}
      <style jsx>
        {`
          .LightningBolt {
            position: fixed;
            right: 50px;
            top: 220px;
            max-width: 92px;
          }
        `}
      </style>
    </>
  );
}
