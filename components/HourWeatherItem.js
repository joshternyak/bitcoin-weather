import React from "react";
import Image from "next/image";

export default function HourWeatherItem({
  price,
  icon,
  displayTime,
  currentIndex,
}) {
  return (
    <div className="HourWeatherItem">
      <div className="HourWeatherItem">
        <p className="HourWeatherItem__time">
          {currentIndex === 0 ? "Now" : displayTime}
        </p>
        <div className="HourWeatherItem__weather-icon">
          <img src={"/static/images/" + icon} alt="icon" />
        </div>
        <p className="HourWeatherItem__price">${price}</p>
      </div>
      <style jsx>{`
        .HourWeatherItem {
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: space-between;
          padding: 12px 10px;
          width: 80px;
        }
        .HourWeatherItem__time {
          font-style: normal;
          font-weight: 500;
          font-size: 11px;
          line-height: 13px;
          margin-bottom: 10px;
          color: #ffffff;
        }
        .HourWeatherItem__weather-icon {
          height: 30px;
          margin-bottom: 10px;
        }
        .HourWeatherItem__weather-icon img {
          width: auto;
          height: 100%;
        }
        .HourWeatherItem__price {
          font-style: normal;
          font-weight: bold;
          font-size: 12px;
          line-height: 15px;
          color: #ffffff;
          margin: 0;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  );
}
