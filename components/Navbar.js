import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="Navbar">
      <a href="/">
        <img
          src="/static/images/logo.png"
          className="Navbar__logo"
          alt="logo"
        />
      </a>
      <p className="Navbar__description">
        See real-time price predictions for Bitcoin.
      </p>
      <style jsx>{`
        .Navbar {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          padding: 19px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.25);
          max-width: 337px;
          margin: 0px auto 35px auto;
        }
        .Navbar__logo {
          max-width: 208px;
          margin-bottom: 15px;
        }
        .Navbar__description {
          font-style: normal;
          font-weight: 500;
          font-size: 15px;
          line-height: 21px;
          text-align: center;
          color: rgba(255, 255, 255, 0.65);
          margin-bottom: 0px;
        }
      `}</style>
    </div>
  );
}