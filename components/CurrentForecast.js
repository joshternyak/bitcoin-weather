import React from "react";
import numeral from "numeral";

import { ArrowDown, ArrowUp } from "react-feather";

export default function CurrentForecast({
  currentPrice,
  bitcoinPriceNum,
  weatherState: { theme, cloudy, night },
  glassShadow,
  yesterdayHigh,
}) {
  const lowBitcoinPrice = parseInt(bitcoinPriceNum) / 2;
  const bitcoinPrice = numeral(lowBitcoinPrice).format("0.0a");
  const bitcoinPriceDisplay = `$${bitcoinPrice}`;

  const isWeatherClear = night && theme !== "storm" && theme !== "cloudy";

  if (isWeatherClear) {
    theme = "Clear";
  }
  Math.round(((39100 / 37600) * 100 - 100) * 100) / 100;
  const btcChange =
    Math.round(((parseInt(bitcoinPriceNum?.replace(",", "")) / yesterdayHigh) * 100 - 100) * 100) / 100;
  const btcUp = btcChange >= 1 ? true : false;

  const weatherType = !night && theme !== "storm" && !cloudy ? "Clear" : theme;

  return (
    <div className="CurrentForecast">
      <p className="CurrentForecast__location">Planet Earth</p>
      <p className="CurrentForecast__weather-type">
        {weatherType === "storm" ? "Bitcoin Storm!" : weatherType}
      </p>
      <div className="CurrentForecast__price__outer">
        <h1 className="CurrentForecast__price">{currentPrice}</h1>
        <div className="CurrentForecast__change">
          {btcUp ? (
            <ArrowUp size={20} strokeWidth={2} color="#c6ffdb" />
          ) : (
            <ArrowDown size={20} strokeWidth={2} color="#ff4040" />
          )}
          <span>{btcChange}%</span>
        </div>
      </div>
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
          .CurrentForecast__price__outer {
            position: relative;
            width: 100%;
          }
          .CurrentForecast__price {
            font-style: normal;
            font-weight: bold;
            font-size: 75px;
            line-height: 94px;
            color: #ffffff;
            text-shadow: 0px 10px 20px ${glassShadow};
            text-transform: uppercase;
          }
          .CurrentForecast__change {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 20px;
            left: 410px;
            background: ${btcUp ? "#0e5e36aa" : "#5c1414"};
            font-weight: 500;
            padding: 6px;
            line-height: 0;
            border-radius: 8px;
            font-size: 16px;
          }
          .CurrentForecast__change > span {
            font-weight: 500;
            margin: -1px 0 0 3px;
            font-family: monospace;
            color: ${btcUp ? "#c6ffdb" : "#ff4040"};
          }
        `}
      </style>
    </div>
  );
}
