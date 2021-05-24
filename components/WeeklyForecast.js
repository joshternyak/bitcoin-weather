import React from "react";
import weeklyForecastData from "../public/weeklyForecast";
import DayWeatherItem from "./DayWeatherItem";
import { currentDay } from "../public/helpers";
import numeral from "numeral";

export default function WeeklyForecast({
  priceToday,
  lastSixDaysHighs,
  lastSixDaysLows,
}) {
  const today = currentDay;
  return (
    <div className="WeeklyForecast">
      {weeklyForecastData.map((day, index) => {
        let itemIcon;
        const highBitcoinPrice = numeral(lastSixDaysHighs[index]).format(
          "0.0a"
        );
        const lowBitcoinPrice = numeral(lastSixDaysLows[index]).format("0.0a");
        console.log(lastSixDaysHighs[index] - lastSixDaysHighs[index - 1]);
        if (lastSixDaysHighs[index] - lastSixDaysHighs[index - 1] > 1000) {
          itemIcon = "small-storm-cloud.svg";
        } else if (lastSixDaysHighs[index] - lastSixDaysHighs[index - 1] < 0) {
          itemIcon = "small-regular-cloud.svg";
        } else {
          itemIcon = "small-sun.svg";
        }
        return day.day === today ? (
          <DayWeatherItem
            today={true}
            key={index}
            day={day.day}
            highPriceForecast={highBitcoinPrice}
            lowPriceForecast={lowBitcoinPrice}
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
            width: 100%;
            padding-top: 10px;
          }
        `}
      </style>
    </div>
  );
}
