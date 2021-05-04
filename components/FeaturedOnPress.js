import React from "react";

const logos = [
  {
    img: "/static/images/kare-11.png",
    name: "kare 11",
  },
  {
    img: "/static/images/new-york-times.png",
    name: "new york times",
  },
  {
    img: "/static/images/the-verge.png",
    name: "the verge",
  },
];

export default function FeaturedOnPress() {
  return (
    <div className="FeaturedOnPress">
      <h3 className="FeaturedOnPress__title">As seen on:</h3>
      <div className="FeaturedOnPress__divider" />
      <div className="FeaturedOnPress__logo-grid">
        {logos.map((logo, index) => {
          return (
            <div className="FeaturedOnPress__logo" key={index}>
              <img
                src={logo.img}
                alt={logo.name}
                className="FeaturedOnPress__logo-img"
              />
            </div>
          );
        })}
      </div>
      <style jsx>
        {`
          .FeaturedOnPress {
            position: relative;
            z-index: 2;
            text-align: center;
            margin-top: 60px;
          }
          .FeaturedOnPress__title {
            font-style: normal;
            font-weight: bold;
            font-size: 20px;
            line-height: 25px;
            color: #ffffff;
            opacity: 0.5;
          }
          .FeaturedOnPress__divider {
            border-top: 1.5px solid #ffffff;
            opacity: 0.25;
            max-width: 393px;
            margin: 0 auto;
          }
          .FeaturedOnPress__logo-grid {
            opacity: 0.55;
            display: flex;
            align-content: center;
            justify-content: space-between;
            flex-wrap: wrap;
          }
          @media (max-width: 800px) {
            .FeaturedOnPress__logo-grid {
              justify-content: center;
            }
          }
          .FeaturedOnPress__logo {
            max-height: 30px;
            margin: 20px 0;
          }
          .FeaturedOnPress__logo-img {
            width: 100%;
            height: 100%;
          }
          @media (max-width: 800px) {
            .FeaturedOnPress__logo {
              margin: 20px 20px 0px 20px;
            }
          }
          @media (max-width: 500px) {
            .FeaturedOnPress__logo {
              max-width: 120px;
              max-height: unset;
            }
          }
        `}
      </style>
    </div>
  );
}
