import React from "react";

export default function Share() {
  return (
    <div className="ShareButtons">
      <a
        className="ShareButtons__btn"
        href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fbitcointemp.com%2F&amp;src=sdkpreparse"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={"/static/images/facebook.svg"}
          className="ShareButtons__logo"
          alt="facebook logo"
        />
      </a>
      <a
        className="ShareButtons__btn"
        target="_blank"
        rel="noreferrer"
        href="https://twitter.com/intent/tweet?url=bitcointemp.com&text=See%20real-time%20price%20predictions%20for%20Bitcoin%20at"
        data-text="See real-time price predictions for Bitcoin."
        data-url="https://bitcointemp.com"
        data-hashtags="Bitcoin, Crypto"
        data-via="Bitcoin, Crypto"
      >
        <img
          src={"/static/images/twitter.svg"}
          className="ShareButtons__logo"
          alt="twitter logo"
        />
      </a>
      <style jsx>
        {`
          .ShareButtons {
            position: fixed;
            top: 50%;
            left: 10px;
            transform: translateY(-50%);
            z-index: 2;
            display: flex;
            flex-direction: column;
            color: white;
            text-transform: uppercase;
          }
          @media (max-width: 700px) {
            .ShareButtons {
              position: static;
              transform: translateY(0);
              flex-direction: row;
              justify-content: center;
              margin-top: 40px;
              margin-bottom: 0px;
            }
          }
          .ShareButtons__btn {
            margin: 5px 0;
            border: 2px solid white;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            padding: 7.5px 5px;
            transition: 0.2s;
            width: 45px;
            height: 45px;
          }
          .ShareButtons__btn:hover {
            background: #5f9dff;
          }
          @media (max-width: 700px) {
            .ShareButtons__btn {
              width: 35px;
              height: 35px;
              margin: 0px 5px;
            }
          }
          .ShareButtons__logo {
            width: 20px;
          }
        `}
      </style>
    </div>
  );
}
