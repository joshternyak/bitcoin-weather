import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import AppCreators from "@/components/AppCreators";
import CurrentForecast from "@/components/CurrentForecast";
import Sky from "@/components/sky/sky";
import HourlyForecast from "@/components/HourlyForecast";
import WeeklyForecast from "@/components/WeeklyForecast";
import PoweredBy from "@/components/PoweredBy";
import Loading from "@/components/Loading";
import "antd/dist/antd.css";
import Share from "@/components/Share";
import { randomNumber } from "@/public/helpers";
import numeral from "numeral";
import FeaturedOnPress from "@/components/FeaturedOnPress";

export default function App() {
  // Time variables
  const [loading, setLoading] = useState(true);
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
  const unRoundedBitcoinPrice = priceData && priceData[currency].rate;
  const bitcoinPrice = numeral(unRoundedBitcoinPrice).format("0.0a");
  const bitcoinPriceDisplay = `$${bitcoinPrice}`;
  const unRoundedBitcoinPriceAsNum = parseInt(unRoundedBitcoinPrice);

  // Social shares
  let socialSharesNum = unRoundedBitcoinPriceAsNum * 40;
  const socialShares = numeral(socialSharesNum).format("0.0a");

  const setStormTheme = () => {
    setTheme("storm");
    setCloudyTheme();
  };

  const setCloudyTheme = () => {
    setCloudy(true);
  };

  const setNightTheme = () => {
    setNight(true);
  };

  const setSunnyTheme = () => {
    setTheme("sunny");
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
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    // This interval is temporarily commented out.
    // const interval = setInterval(() => {
    fetchPrices();
    // }, 1000)
    // return () => clearInterval(interval)
  }, []);

  // Show storm theme if price of bitcoin is more than $50K
  setInterval(() => {
    if (unRoundedBitcoinPriceAsNum > 50) setStormTheme();
  }, 1000);

  // Show cloudy theme if price of bitcoin is less than $40K
  setInterval(() => {
    if (unRoundedBitcoinPriceAsNum < 40) setCloudyTheme();
  }, 1000);

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
      {loading ? (
        <Loading />
      ) : (
        <div className="App__inner">
          <div className="App__inner-container">
            {/* <div
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
            </div> */}
            <Navbar />
            <CurrentForecast
              bitcoinPriceNum={unRoundedBitcoinPrice}
              currentPrice={bitcoinPriceDisplay}
              weatherState={weatherState}
            />
            <HourlyForecast
              randomNumber={randomNumber}
              hourlyPriceForecast={hourlyPriceForecast}
              lowPriceForecast={lowPriceForecast}
            />
            <WeeklyForecast
              randomNumber={randomNumber}
              dailyHighPriceForecast={hourlyPriceForecast}
              dailyLowPriceForecast={lowPriceForecast}
              priceToday={bitcoinPriceDisplay}
            />
            <FeaturedOnPress />
          </div>
          <Sky weatherState={weatherState} />
          <AppCreators />
          <Share shareCount={socialShares} />
          <PoweredBy />
        </div>
      )}
      <style jsx>
        {`
          .App {
            min-height: 100vh;
            min-width: 100vw;
            width: 100vw;
            overflow-x: hidden;
          }
          .App__inner {
            max-width: 543px;
            margin-left: auto;
            margin-right: auto;
            padding: 0px 10px;
          }
          .App__inner-container {
            position: relative;
            z-index: 2;
            min-height: 100vh;
            width: 100%;
          }
        `}
      </style>
    </div>
  );
}
