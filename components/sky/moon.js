import React from "react";

export default function Moon() {
  return (
    <>
      <img src="./static/images/moon.png" alt="moon" className="Moon" />
      <style jsx>
        {`
          .Moon {
            position: fixed;
            left: -50px;
            top: 0px;
            max-width: 550px;
          }
        `}
      </style>
    </>
  );
}
