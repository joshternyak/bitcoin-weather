import React from "react";
import { currentDay } from "../public/helpers";
import numeral from "numeral";

export default function CurrentForecast({
  currentPrice,
  bitcoinPriceNum,
  weatherState: { theme, cloudy, night },
}) {
  const lowBitcoinPrice = parseInt(bitcoinPriceNum) / 2;
  const bitcoinPrice = numeral(lowBitcoinPrice).format("0.0a");
  const bitcoinPriceDisplay = `$${bitcoinPrice}`;

  const isWeatherClear = night && theme !== "storm" && theme !== "cloudy";

  if (isWeatherClear) {
    theme = "Clear";
  }

  const weatherType = !night && theme !== "storm" && !cloudy ? "Clear" : theme;

  return (
    <div className="CurrentForecast">
      <p className="CurrentForecast__location">Planet Earth</p>
      <p className="CurrentForecast__weather-type">
        {weatherType === "storm" ? "Bitcoin Storm!" : weatherType}
      </p>
      <h1 className="CurrentForecast__price">{currentPrice}</h1>

      <div className="CurrentForecast__details">
        <div className="CurrentForecast__flex-group">
          <p className="CurrentForecast__today">{currentDay}</p>
          <p className="CurrentForecast__label">Today</p>
        </div>
        <div className="CurrentForecast__flex-group">
          <p className="CurrentForecast__high-price">{currentPrice}</p>
          <p className="CurrentForecast__low-price">{bitcoinPriceDisplay}K</p>
        </div>
      </div>
      <style jsx>
        {`
          .CurrentForecast {
            text-align: center;
            font-style: normal;
            color: #ffffff;
          }
          .CurrentForecast__location {
            font-weight: 500;
            font-size: 25px;
            line-height: 31px;
            margin-bottom: 5px;
          }
          .CurrentForecast__weather-type {
            font-size: 15px;
            font-weight: 300;
            line-height: 24.75px;
            text-transform: capitalize;
          }
          .CurrentForecast__price {
            font-style: normal;
            font-weight: bold;
            font-size: 75px;
            line-height: 94px;
            color: #ffffff;
            text-shadow: 0px 10px 20px rgba(80, 117, 168, 0.5);
            text-transform: uppercase;
          }
          .CurrentForecast__details {
            display: flex;
            justify-content: space-between;
            margin-top: 0px;
          }
          .CurrentForecast__flex-group {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .CurrentForecast__today,
          .CurrentForecast__label {
            font-weight: 500;
          }
          .CurrentForecast__today {
            font-size: 15px;
            line-height: 26px;
            color: #ffffff;
          }
          .CurrentForecast__label {
            font-size: 10px;
            line-height: 165.02%;
            color: rgba(255, 255, 255, 0.5);
            text-transform: uppercase;
          }
          .CurrentForecast__high-price,
          .CurrentForecast__low-price {
            font-style: normal;
            font-weight: 500;
            font-size: 15px;
            line-height: 26px;
            text-transform: uppercase;
          }
          .CurrentForecast__high-price {
            color: #ffffff;
          }
          .CurrentForecast__low-price {
            color: rgba(255, 255, 255, 0.5);
          }
          .CurrentForecast__today,
          .CurrentForecast__label,
          .CurrentForecast__high-price,
          .CurrentForecast__low-price {
            padding: 0px 7px;
          }
        `}
      </style>
    </div>
  );
}
