import React from "react";

export default function PoweredBy() {
  return (
    <div className="PoweredBy">
      Powered by{" "}
      <a
        href="https://www.coindesk.com/price/bitcoin"
        target="_blank"
        rel="noreferrer"
        className="PoweredBy__link"
      >
        Coindesk
      </a>
      <style jsx>{`
        .PoweredBy {
          text-align: center;
          font-size: 10px;
          color: white;
          z-index: 3;
          position: relative;
          margin: 50px auto 10px auto;
        }
        @media (max-width: 500px) {
          .PoweredBy {
            display: none;
          }
        }

        .PoweredBy__link {
          color: white;
        }
        .PoweredBy__link:hover {
          color: darken(white, 10);
        }
      `}</style>
    </div>
  );
}
