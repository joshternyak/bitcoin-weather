import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import AppCreators from "@/components/AppCreators";
import CurrentForecast from "@/components/CurrentForecast";
import Sky from "@/components/sky/sky";
import HourlyForecast from "@/components/HourlyForecast";
import WeeklyForecast from "@/components/WeeklyForecast";
import PoweredBy from "@/components/PoweredBy";
import "antd/dist/antd.css";
import Share from "@/components/Share";
import { randomNumber, currentDay } from "@/public/helpers";
import numeral from "numeral";
import FeaturedOnPress from "@/components/FeaturedOnPress";

export default function App() {
  // Time variables
  const hours = new Date().getHours();
  const isDayTime = hours > 6 && hours < 20;

  // Weather variables
  const [theme, setTheme] = useState("sunny");
  const [cloudy, setCloudy] = useState(false);
  const [night, setNight] = useState(!isDayTime);

  const weatherState = {
    theme,
    cloudy,
    night,
  };

  // Bitcoin price API variables
  const [priceData, setPriceData] = useState(null);
  const [currency, setCurrency] = useState(null);
  const [lastWeekLows, setlastWeekLows] = useState([]);
  const [lastWeekHighs, setlastWeekHighs] = useState([]);
  const [glassShadow, setGlassShadow] = useState("");
  let unRoundedBitcoinPrice = priceData && priceData[currency].rate;
  const bitcoinPrice = numeral(unRoundedBitcoinPrice).format("0.0a");
  const bitcoinPriceDisplay = `$${bitcoinPrice}`;
  const unRoundedBitcoinPriceAsNum = parseInt(unRoundedBitcoinPrice);

  // Social shares
  let socialSharesNum = unRoundedBitcoinPriceAsNum * 40;
  const socialShares = numeral(socialSharesNum).format("0.0a");

  const setStormTheme = () => {
    setTheme("storm");
    setGlassShadow("rgba(31, 38, 135, 0.37)");
    setCloudyTheme();
  };

  const setCloudyTheme = () => {
    setCloudy(true);
    setGlassShadow("#224b864f");
  };

  const setNightTheme = () => {
    setNight(true);
    setGlassShadow("#06042ca3");
  };

  const setSunnyTheme = () => {
    setTheme("sunny");
    setCloudy(false);
    setGlassShadow("#224b864f");
    setNight(false);
  };

  // For fetching the current bitcoin price
  useEffect(() => {
    async function fetchPrices() {
      const res = await fetch(
        "https://api.coindesk.com/v1/bpi/currentprice.json"
      );
      const data = await res.json();
      setCurrency(data.bpi.USD.code);
      setPriceData(data.bpi);
    }

    async function fetchlastWeek() {
      const resHigh = await fetch(
        "https://api.coindesk.com/v1/bpi/historical/high.json"
      );
      const dataHigh = await resHigh.json();
      setlastWeekHighs(
        Object.values(dataHigh.bpi).slice(Math.max(24, 0)).reverse()
      );

      const resLow = await fetch(
        "https://api.coindesk.com/v1/bpi/historical/low.json"
      );
      const dataLow = await resLow.json();
      setlastWeekLows(
        Object.values(dataLow.bpi).slice(Math.max(24, 0)).reverse()
      );

      console.log(
        `highs: ${Object.values(dataHigh.bpi)
          .slice(Math.max(24, 0))
          .reverse()} \n lows: ${Object.values(dataLow.bpi)
          .slice(Math.max(24, 0))
          .reverse()}`
      );
    }
    fetchlastWeek();
    fetchPrices();
    if (unRoundedBitcoinPrice - lastWeekHighs[0] > 1000) {
      setStormTheme();
    } else if (unRoundedBitcoinPrice - lastWeekHighs[0] < 0) {
      setCloudyTheme();
    } else {
      setSunnyTheme();
    }
  }, []);

  unRoundedBitcoinPrice = 39000;

  // Generate a random high price
  const randomHighPrice = randomNumber(
    unRoundedBitcoinPriceAsNum,
    unRoundedBitcoinPriceAsNum * 1.5
  );
  const hourByHourHighPricePrediction = parseInt(randomHighPrice);
  const hourByHourHighPricePredictionMultiplied =
    hourByHourHighPricePrediction * 1000;

  // Generate a random low price
  const randomLowPriceMultiplier = randomNumber(950, 800);
  const randomLowPrice = randomNumber(
    hourByHourHighPricePredictionMultiplied,
    hourByHourHighPricePrediction * parseInt(randomLowPriceMultiplier)
  );
  const hourByHourLowPricePrediction = parseInt(randomLowPrice);

  // We should write two different useEffect functions
  // 1. One that only runs once which will fetch the bitcoin price once and plug it into the high and low prices variables that will then be passed as props into the hourly and weekly forecast. Inside those components the high and low price props will be multiplied by another random number so they're random for each weekday item or hour item

  // 2. And the other useeffect will stay the same like it is now to constantly update the main price every second

  // For now, we'll just use the original useeffect that is updated to only run once

  const hourlyPriceForecast = hourByHourHighPricePredictionMultiplied;
  const lowPriceForecast = hourByHourLowPricePrediction;
  return (
    <div className="App">
      <div className="App__inner">
        <div className="App__inner-container">
          <div
            style={{
              position: "fixed",
              bottom: "20px",
              left: "200px",
              background: "white",
            }}
          >
            <p>
              Random high price: {hourByHourHighPricePredictionMultiplied}
              <br />
              Random low price: {hourByHourLowPricePrediction}
            </p>
            <button onClick={setNightTheme}>Night</button>
            <button onClick={setStormTheme}>Storm</button>
            <button onClick={setSunnyTheme}>Sunny</button>
            <button onClick={setCloudyTheme}>Cloudy</button>
          </div>
          <Navbar />
          <CurrentForecast
            bitcoinPriceNum={unRoundedBitcoinPrice}
            weatherState={weatherState}
            currentPrice={bitcoinPriceDisplay}
          />
          <div className="glasswindow">
            <div className="CurrentForecast__details">
              <div className="CurrentForecast__flex-group">
                <p className="CurrentForecast__today">{currentDay}</p>
                <p className="CurrentForecast__label">Today</p>
              </div>
              <div className="CurrentForecast__flex-group">
                <p className="CurrentForecast__high-price">
                  {bitcoinPriceDisplay}
                </p>
                <p className="CurrentForecast__low-price">
                  ${numeral(parseInt(unRoundedBitcoinPrice) / 2).format("0.0a")}
                </p>
              </div>
            </div>
            <HourlyForecast
              randomNumber={randomNumber}
              hourlyPriceForecast={hourlyPriceForecast}
              lowPriceForecast={lowPriceForecast}
            />
            <WeeklyForecast
              lastWeekHighs={lastWeekHighs}
              lastWeekLows={lastWeekLows}
              priceToday={bitcoinPriceDisplay}
            />
          </div>
          <FeaturedOnPress />
        </div>
        <Sky weatherState={weatherState} />
        <AppCreators />
        <Share shareCount={socialShares} />
        <PoweredBy />
      </div>
      <style jsx>
        {`
          .App {
            min-height: 100vh;
            width: 100vw;
            overflow-x: hidden;
          }
          .App__inner {
            max-width: 543px;
            height: auto;
            margin-left: auto;
            margin-right: auto;
            padding: 0px 10px;
          }
          .App__inner-container {
            position: relative;
            z-index: 2;
            min-height: 100vh;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          }
          .glasswindow {
            width: 100%;
            padding: 18px;
            background: rgba(255, 255, 255, 0.01);
            box-shadow: 0 8px 32px 0 ${glassShadow};
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 18px;
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
          .CurrentForecast__details {
            display: flex;
            justify-content: space-between;
            margin-top: 0px;
            width: 100%;
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
