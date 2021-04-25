import React from "react"
import "./hourly-forecast.scss"
import hourlyForecastData from "../../hourlyForecast"
import HourWeatherItem from "../hour-weather-item/hour-weather-item"
import ScrollContainer from "react-indiana-drag-scroll"
import numeral from "numeral"
import regularCloud from "../../assets/images/hourly-regular-cloud.png"
import stormCloud from "../../assets/images/hourly-storm-cloud.png"
import sun from "../../assets/images/hourly-sun.png"

export default function HourlyForecast({
  hourlyPriceForecast,
  lowPriceForecast,
  randomNumber,
}) {

  var date = new Date();

  return (
    <ScrollContainer className="scroll-container HourlyForecast">
      {hourlyForecastData.map((day, index) => {
        const randomHourlyPriceForecast = randomNumber(
          hourlyPriceForecast,
          lowPriceForecast
        )
        let itemIcon

        var hours = (date.getHours() + index + 24) % 24; 
        var mid = 'am';
        if (hours === 0){
          hours = 12;
        }
        else if (hours > 12) {
          hours = hours % 12;
          mid = 'pm';
        }

        let displayTime = hours + mid;

        if (
          randomHourlyPriceForecast > 63000 &&
          randomHourlyPriceForecast < 65000
        ) {
          itemIcon = stormCloud
        } else if (
          randomHourlyPriceForecast < 63000 &&
          randomHourlyPriceForecast > 45000
        ) {
          itemIcon = sun
        } else {
          itemIcon = regularCloud
        }

        const bitcoinPrice = numeral(randomHourlyPriceForecast).format("0.0a")
        return (
          <HourWeatherItem key={index} displayTime={displayTime} price={bitcoinPrice} icon={itemIcon} />
        )
      })}
    </ScrollContainer>
  )
}
