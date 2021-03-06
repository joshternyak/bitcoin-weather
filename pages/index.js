import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import AppCreators from "@/components/AppCreators";
import CurrentForecast from "@/components/CurrentForecast";
import Sky from "@/components/sky/sky";
import WeeklyForecast from "@/components/WeeklyForecast";
import PoweredBy from "@/components/PoweredBy";
import "antd/dist/antd.css";
import Share from "@/components/Share";
import { currentDay } from "@/public/helpers";
import numeral from "numeral";

export default function App() {
  // Time variables
  const hours = new Date().getHours();

  // Weather variables
  const [theme, setTheme] = useState("sunny");
  const [cloudy, setCloudy] = useState(false);
  const [night, setNight] = useState(false);

  const [isDay, setIsDay] = useState(hours > 6 && hours < 20);

  const [weatherType, setWeatherType] = useState(""); // Can be either "clear", "cloudy", or "stormy"

  const weather = {isDay, weatherType};

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

  const setStormTheme = () => {
    setWeatherType("storm");
    setGlassShadow(weather.isDay ? "#1f26874f" : "#06042ca3");
  };

  const setCloudyTheme = () => {
    setWeatherType("cloudy");
    setGlassShadow(weather.isDay ? "#224b864f" : "#06042ca3");
  };

  const setNightTheme = () => {
    setIsDay(false);
    setGlassShadow("#06042ca3");
  };

  const setClearTheme = () => {
    setWeatherType("clear");
    setGlassShadow(weather.isDay ? "#224b864f" : "#06042ca3");
  };
  const setDayTheme = () => {
    setIsDay(true);
    setGlassShadow("#224b864f");
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
      setlastWeekHighs(Object.values(dataHigh.bpi).slice(Math.max(23, 0)));

      const resLow = await fetch(
        "https://api.coindesk.com/v1/bpi/historical/low.json"
      );
      const dataLow = await resLow.json();
      setlastWeekLows(Object.values(dataLow.bpi).slice(Math.max(23, 0)));
    }
    fetchlastWeek();
    fetchPrices();
    if (
      parseInt(unRoundedBitcoinPrice?.replace(",", "")) - lastWeekHighs[6] >
      1000
    ) {
      setWeatherType("storm");
      setGlassShadow(weather.isDay ? "#1f26874f" : "#06042ca3");
    } else if (
      parseInt(unRoundedBitcoinPrice?.replace(",", "")) - lastWeekHighs[6] <
      0
    ) {
      setWeatherType("cloudy");
      setGlassShadow(weather.isDay ? "#224b864f" : "#06042ca3");
    } else {
      setWeatherType("clear");
      setGlassShadow(weather.isDay ? "#224b864f" : "#06042ca3");
    }
  }, []);

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
            <button onClick={setDayTheme}>Day</button>
            <button onClick={setNightTheme}>Night</button>
            <button onClick={setStormTheme}>Storm</button>
            <button onClick={setClearTheme}>Clear</button>
            <button onClick={setCloudyTheme}>Cloudy</button>
          </div>
          <Navbar />
          <CurrentForecast
            bitcoinPriceNum={unRoundedBitcoinPrice}
            weatherState={weatherState}
            currentPrice={bitcoinPriceDisplay}
            glassShadow={glassShadow}
            yesterdayHigh={lastWeekHighs[6]}
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
              </div>
            </div>
            <WeeklyForecast
              lastWeekHighs={lastWeekHighs}
              lastWeekLows={lastWeekLows}
              priceToday={bitcoinPriceDisplay}
            />
          </div>
        </div>
        <Sky weather={weather} />
        <AppCreators />
        <Share />
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
            justify-content: flex-start;
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
