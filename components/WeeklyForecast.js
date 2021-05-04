import React from "react";
import weeklyForecastData from "../public/weeklyForecast";
import DayWeatherItem from "./DayWeatherItem";
import { currentDay } from "../public/helpers";
import numeral from "numeral";

export default function WeeklyForecast({
  priceToday,
  dailyHighPriceForecast,
  dailyLowPriceForecast,
  randomNumber,
}) {
  const today = currentDay;
  return (
    <div className="WeeklyForecast">
      {weeklyForecastData.map((day, index) => {
        let itemIcon;
        const randomDailyHighPriceForecast = randomNumber(
          dailyHighPriceForecast,
          dailyLowPriceForecast * 0.8
        );
        const randomDailyLowPriceForecast = randomNumber(
          randomDailyHighPriceForecast,
          dailyLowPriceForecast * 0.7
        );
        const randomDailyLoweredPriceForecast = randomNumber(
          randomDailyLowPriceForecast,
          randomDailyLowPriceForecast * 0.7
        );
        const highBitcoinPrice = numeral(randomDailyHighPriceForecast).format(
          "0.0a"
        );
        const lowBitcoinPrice = numeral(randomDailyLowPriceForecast).format(
          "0.0a"
        );
        const loweredBitcoinPrice = numeral(
          randomDailyLoweredPriceForecast
        ).format("0.0a");

        if (randomDailyHighPriceForecast > 60000) {
          itemIcon = "small-storm-cloud.png";
        } else if (
          randomDailyHighPriceForecast < 60000 &&
          randomDailyHighPriceForecast > 40000
        ) {
          itemIcon = "small-sun.png";
        } else {
          itemIcon = "small-regular-cloud.png";
        }
        return day.day === today ? (
          <DayWeatherItem
            today={true}
            key={index}
            day={day.day}
            highPriceForecast={priceToday}
            lowPriceForecast={loweredBitcoinPrice}
            icon={itemIcon}
          />
        ) : (
          <DayWeatherItem
            key={index}
            day={day.day}
            highPriceForecast={highBitcoinPrice}
            lowPriceForecast={lowBitcoinPrice}
            icon={itemIcon}
          />
        );
      })}
      <style jsx>
        {`
          .WeeklyForecast {
            padding-top: 10px;
          }
        `}
      </style>
    </div>
  );
}
