import React from "react"
import "./weekly-forecast.scss"
import weeklyForecastData from "../../weeklyForecast"
import DayWeatherItem from "../day-weather-item/day-weather-item"
import { currentDay } from "../../helpers"
import numeral from "numeral"

export default function WeeklyForecast({
  priceToday,
  dailyHighPriceForecast,
  dailyLowPriceForecast,
  randomNumber,
}: any) {
  const today = currentDay
  return (
    <div className="WeeklyForecast">
      {weeklyForecastData.map((day, index) => {
        const randomDailyHighPriceForecast = randomNumber(
          dailyHighPriceForecast,
          dailyLowPriceForecast * 0.8
        )
        const randomDailyLowPriceForecast = randomNumber(
          randomDailyHighPriceForecast,
          dailyLowPriceForecast * 0.7
        )
        const highBitcoinPrice = numeral(randomDailyHighPriceForecast).format(
          "0.0a"
        )
        const lowBitcoinPrice = numeral(randomDailyLowPriceForecast).format(
          "0.0a"
        )
        return day.day === today ? (
          <DayWeatherItem
            today={true}
            key={index}
            day={today}
            highPriceForecast={priceToday}
            lowPriceForecast={lowBitcoinPrice}
          />
        ) : (
          <DayWeatherItem
            key={index}
            day={day.day}
            highPriceForecast={highBitcoinPrice}
            lowPriceForecast={lowBitcoinPrice}
          />
        )
      })}
    </div>
  )
}
