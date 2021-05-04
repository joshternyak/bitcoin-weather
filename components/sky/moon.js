import React from "react";

export default function Moon() {
  return (
    <>
      <img src="./static/images/moon.png" alt="moon" className="Moon" />
      <style jsx>
        {`
          .Moon {
            position: fixed;
            left: -58px;
            top: 75px;
            max-width: 164px;
          }
        `}
      </style>
    </>
  );
}
