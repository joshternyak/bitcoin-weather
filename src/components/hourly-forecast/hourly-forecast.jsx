import React from "react"
import "./hourly-forecast.scss"
import hourlyForecastData from "../../hourlyForecast"
import HourWeatherItem from "../hour-weather-item/hour-weather-item"
import ScrollContainer from "react-indiana-drag-scroll"
import numeral from "numeral"

export default function HourlyForecast({
  hourlyPriceForecast,
  lowPriceForecast,
  randomNumber,
}) {
  return (
    <ScrollContainer className="scroll-container HourlyForecast">
      {hourlyForecastData.map((day, index) => {
        const randomHourlyPriceForecast = randomNumber(
          hourlyPriceForecast,
          lowPriceForecast
        )
        const bitcoinPrice = numeral(randomHourlyPriceForecast).format("0.0a")
        return <HourWeatherItem key={index} price={bitcoinPrice} />
      })}
    </ScrollContainer>
  )
}
