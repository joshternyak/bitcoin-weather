import React from "react"
import "./weekly-forecast.scss"
import weeklyForecastData from "../../weeklyForecast"
import DayWeatherItem from "../day-weather-item/day-weather-item"

export default function WeeklyForecast() {
  return (
    <div className="WeeklyForecast">
      {weeklyForecastData.map((day, index) => (
        <DayWeatherItem key={index} day={day.day} price={day.price} />
      ))}
    </div>
  )
}
