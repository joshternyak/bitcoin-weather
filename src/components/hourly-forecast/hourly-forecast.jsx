import React from "react"
import "./hourly-forecast.scss"
import hourlyForecastData from "../../hourlyForecast"
import HourWeatherItem from "../hour-weather-item/hour-weather-item"
import ScrollContainer from "react-indiana-drag-scroll"

export default function HourlyForecast() {
  return (
    <ScrollContainer className="scroll-container HourlyForecast">
      {hourlyForecastData.map((day, index) => (
        <HourWeatherItem key={index} price={day.price} />
      ))}
    </ScrollContainer>
  )
}
