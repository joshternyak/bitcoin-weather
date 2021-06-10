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
  const btcChange =
  Math.round(((parseInt(bitcoinPriceNum?.replace(",", "")) / yesterdayHigh) * 100 - 100) * 100) / 100;
  const btcUp = btcChange >= 1 ? true : false;
  const weatherType = !night && theme !== "storm" && !cloudy ? "Clear" : theme;

  return (
    <div className="CurrentForecast">
      {/* <p className="CurrentForecast__weather-type">
        {weatherType === "storm" ? "Bitcoin Storm!" : weatherType}
      </p> */}
      <div className="CurrentForecast__price__outer">
        <h1 className={`CurrentForecast__price ${btcUp ? 'CurrentForecast__price--up' : 'CurrentForecast__price-down'}`}>{currentPrice}</h1>
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
            font-size: 100px;
            line-height: 100%;
            letter-spacing: -1px;
            text-transform: uppercase;
            background-size: 100%;
            background-repeat: repeat;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent; 
            -moz-background-clip: text;
            -moz-text-fill-color: transparent;
            animation-name: current-price-green-glow;
            animation-duration: 3s;
            animation-iteration-count: infinite;
            user-select: none;
          }
          @media(max-width: 900px) {
            .CurrentForecast__price {
              font-size: 80px;
              line-height: 100%;
            }
          }
          .CurrentForecast__price--up {
            background-image: linear-gradient(46deg,#d0ead0,#8fd88f);
          }
          .CurrentForecast__price--down {
            background-image: linear-gradient(46deg,#900cd2,#7709ae);
          }
          .CurrentForecast__change {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 20px;
            right: -15px;
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
