import React from "react";
import Navbar from "./Navbar";

function Loading() {
  const randomFacts = [
    "The first purchase ever with bitcoin was for pizza.",
    "The inventor of Bitcoin is a mystery.",
    "There will only ever be 21 million bitcoins.",
    "Bitcoin is untraceable & Bitcoin is NOT untraceable.",
    "If you lose your Bitcoin private key, you lose your bitcoins.",
  ];

  const generateRandomItem = (items) => {
    return randomFacts[Math.floor(Math.random() * randomFacts.length)];
  };

  const randomFact = generateRandomItem(randomFacts);

  return (
    <div className="Loading">
      <Navbar />
      <div className="Loading__inner">
        <div className="Loading__col">
          <h3 className="Loading__subtitle">DID YOU KNOW?</h3>
          <h1 className="Loading__title">{randomFact}</h1>
          <div className="Loading__bitcoin-spinner">
            <img src="./static/images/bitcoin-spinner.svg" alt="bitcoin" />
          </div>
        </div>
        <div className="Loading__col">
          <img
            src="./static/images/jerome-powell-printing-cash.gif"
            alt="jerome powell"
            className="Loading__gif"
          />
        </div>
      </div>
      <style jsx>
        {`
          .Loading {
            text-align: center;
            background: linear-gradient(
                195.24deg,
                #b8e1ff 2.07%,
                #5f9dff 97.37%
              ),
              #ffffff;
            width: 100vw;
            height: 100vh;
            position: fixed;
            top: 0px;
            left: 0px;
          }
          .Loading__inner {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-style: normal;
            text-align: left;
            display: flex;
            justify-content: space-between;
            max-width: 1234px;
            width: 100%;
            padding: 20px;
          }
          @media (max-width: 900px) {
            .Loading__inner {
              flex-direction: column;
            }
          }
          @media (max-width: 900px) {
            .Loading__col {
              margin-bottom: 20px;
            }
          }
          .Loading__subtitle {
            font-weight: 500;
            font-size: 21px;
            line-height: 28px;
            color: #ffffff;
          }
          .Loading__title {
            font-weight: bold;
            font-size: 50px;
            line-height: 63px;
            color: #ffffff;
          }
          @media (max-width: 1100px) {
            .Loading__title {
              font-size: 40px;
              line-height: 50px;
            }
          }
          @media (max-width: 600px) {
            .Loading__title {
              font-size: 30px;
              line-height: 38px;
            }
          }
          .Loading__gif {
            max-width: 363px;
            border-radius: 150px 30px 30px 30px;
          }
          @media (max-width: 600px) {
            .Loading__gif {
              display: none;
            }
          }
          .Loading__bitcoin-spinner {
            position: relative;
            width: 100%;
            min-height: 100px;
          }
          .Loading__bitcoin-spinner img {
            animation-name: bitcoin-spinner;
            animation-duration: 4s;
            animation-iteration-count: infinite;
            position: absolute;
          }
          @keyframes bitcoin-spinner {
            0%,
            15% {
              left: 0;
              transform: rotateZ(0deg);
            }
            50%,
            60% {
              left: 70%;
              transform: rotateZ(360deg);
            }
            100% {
              left: 0;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Loading;
