import React from "react"
import "./hourly-forecast.scss"
import hourlyForecastData from "../../hourlyForecast"
import HourWeatherItem from "../hour-weather-item/hour-weather-item"

export default function HourlyForecast() {
  return (
    <div className="HourlyForecast">
      {hourlyForecastData.map((day, index) => (
        <HourWeatherItem key={index} price={day.price} />
      ))}
    </div>
  )
}
