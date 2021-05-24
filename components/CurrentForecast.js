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
      <style jsx>
        {`
          .CurrentForecast {
            text-align: center;
            font-style: normal;
            color: #ffffff;
            width: 100%;
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
            text-shadow: 0px 10px 20px #0004;
            text-transform: uppercase;
          }
        `}
      </style>
    </div>
  );
}
