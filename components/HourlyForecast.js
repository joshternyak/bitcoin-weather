import React from "react";
import hourlyForecastData from "../public/hourlyForecast";
import ScrollContainer from "react-indiana-drag-scroll";
import HourWeatherItem from "@/components/HourWeatherItem";
import numeral from "numeral";

export default function HourlyForecast({
  hourlyPriceForecast,
  lowPriceForecast,
  randomNumber,
}) {
  var date = new Date();

  return (
    <ScrollContainer className="HourlyForecast">
      {hourlyForecastData.map((day, index) => {
        const randomHourlyPriceForecast = randomNumber(
          hourlyPriceForecast,
          lowPriceForecast
        );
        let itemIcon;

        var hours = (date.getHours() + index + 24) % 24;
        var mid = "am";
        if (hours === 0) {
          hours = 12;
        } else if (hours > 12) {
          hours = hours % 12;
          mid = "pm";
        }

        let displayTime = hours + mid;

        if (
          randomHourlyPriceForecast > 63000 &&
          randomHourlyPriceForecast < 65000
        ) {
          itemIcon = "small-storm-cloud.png";
        } else if (
          randomHourlyPriceForecast < 63000 &&
          randomHourlyPriceForecast > 45000
        ) {
          itemIcon = "small-sun.png";
        } else {
          itemIcon = "small-regular-cloud.png";
        }

        const bitcoinPrice = numeral(randomHourlyPriceForecast).format("0.0a");
        return (
          <HourWeatherItem
            key={index}
            displayTime={displayTime}
            currentIndex={index}
            price={bitcoinPrice}
            icon={itemIcon}
          />
        );
      })}
    </ScrollContainer>
  );
}
