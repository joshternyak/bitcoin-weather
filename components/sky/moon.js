import React from "react";
import MoneyGuy from "./money-guy/MoneyGuy";

export default function Moon({randomNumberNoRound}) {
  let cash = [];
  for (let i = 0; i < 25; i++) {
    let xOffset = randomNumberNoRound(0, 50);
    let delay = randomNumberNoRound(0, 2);
    let rotation = randomNumberNoRound(-50, 50);
    cash.push(
      <Bill xOffset={xOffset} delay={delay} rotation={rotation} />
    );
  }
  return (
    <>
      <div className="Moon">
        <div className="Moon__inner">
          <img src="./static/images/moon.png" alt="moon" />
          <img
            src="./static/images/transparent-money-guy.gif"
            alt="guy"
            className="Guy"
          />
          <div className="Cash__container">{cash}</div>
        </div>
      </div>
      <style jsx>
        {`
          .Cash__container {
            position: absolute;
            top: 380px;
            left: 290px;
          }
          @keyframes Moon {
            from {
              margin-top: 0px;
              transform: translate(-50%, -50%), rotateZ(2.5deg);
            }
            to {
              margin-top: 20px;
              transform: translate(-50%, -50%), rotateZ(2.5deg);
            }
          }
          @keyframes MoonStart {
            from {
              margin-top: 0px;
              transform: rotateZ(0deg);
            }
            25% {
              margin-top: 50px;
              transform: rotateZ(5deg);
            }
            to {
              margin-top: 0px;
              transform: rotateZ(0deg);
            }
          }
          .Moon {
            position: fixed;
            transform: translate(-50%, -50%);
            top: 50%;
            margin-top: 0px;
            margin-left: -550px;
            left: 50%;
            max-width: 550px;
            z-index: 200;
            animation: Moon 2s ease-in-out infinite alternate;
            animation-delay: 5.25s;
          }
          .Moon__inner {
            position: relative;
            animation: MoonStart 4s;
            animation-delay: 1.5s;
          }

          @keyframes Guy {
            0% {
              top: -500px;
              opacity: 0;
            }
            75% {
              top: 272px;
              opacity: 1;
            }
            80% {
              top: 250px;
              opacity: 1;
            }
            90% {
              top: 272px;
              opacity: 1;
            }
            95% {
              top: 265px;
              opacity: 1;
            }
            100% {
              top: 272px;
              opacity: 1;
            }
          }

          .Guy {
            position: absolute;
            top: 272px;
            left: 235px;
            max-width: 160px;
            animation: Guy 2s;
            animation-timing-function: cubic-bezier(0.65, 0.11, 0.78, 0.38);
          }
        `}
      </style>
    </>
  );
}

function Bill({
  delay,
  xOffset,
  rotation
}) {
  return (
    <div className="bill">
      <div className="bill-inner">$</div>
      <style jsx>{`
        @keyframes yAxis {
          0% {
            transform: translateY(0px) rotateZ(0deg);
            opacity: 0;
          }
          1% {
            opacity: 1;
          }
          100% {
            transform: translateY(600px) rotateZ(${rotation}deg);
            opacity: 0;
          }
        }
        @keyframes xAxis {
          0% {
            transform: translateX(0px);
          }
          100% {
            transform: translateX(400px);
          }
        }
        .bill {
          position: absolute;
          margin-left: ${xOffset}px;
          animation: yAxis 2s cubic-bezier(0.08, -1.01, 0.96, 0.72) infinite;
          animation-delay: ${delay + 1.5}s;
          opacity: 0;
        }
        .bill-inner {
          position: absolute;
          height: 18px;
          width: 36px;
          padding: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #29dd99;
          color: #0c6b35;
          font-weight: 700;
          font-size: 10px;
          border: solid 2px #0c6b35;
          animation: xAxis 2s linear infinite;
          animation-delay: ${delay + 1.5}s;
        }
      `}</style>
    </div>
  );
}