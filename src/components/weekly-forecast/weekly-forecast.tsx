import React from "react"
import "./weekly-forecast.scss"
import weeklyForecastData from "../../weeklyForecast"
import DayWeatherItem from "../day-weather-item/day-weather-item"
import { currentDay } from "../../helpers"

export default function WeeklyForecast({ priceToday }: any) {
  const today = currentDay
  return (
    <div className="WeeklyForecast">
      {weeklyForecastData.map((day, index) => {
        return day.day === today ? (
          <DayWeatherItem today={true} key={index} day={today} price={priceToday} />
        ) : (
          <DayWeatherItem key={index} day={day.day} price={day.price} />
        )
      })}
    </div>
  )
}
