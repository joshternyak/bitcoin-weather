import React from "react"
import "./weekly-forecast.scss"
import weeklyForecastData from "../../weeklyForecast"
import DayWeatherItem from "../day-weather-item/day-weather-item"
import numeral from "numeral"
import regularCloud from "../../assets/images/small-regular-cloud.svg"
import stormCloud from "../../assets/images/small-storm-cloud.svg"
import sun from "../../assets/images/small-sun.svg"

export default function WeeklyForecast({
  dailyHighPriceForecast,
  dailyLowPriceForecast,
  randomNumber,
}: any) {
  return (
    <div className="WeeklyForecast">
      {weeklyForecastData.map((day, index) => {
        let itemIcon
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

        if (randomDailyHighPriceForecast > 60000) {
          itemIcon = stormCloud
        } else if (
          randomDailyHighPriceForecast < 60000 &&
          randomDailyHighPriceForecast > 40000
        ) {
          itemIcon = sun
        } else {
          itemIcon = regularCloud
        }
        return (
          <DayWeatherItem
            key={index}
            day={day.day}
            highPriceForecast={highBitcoinPrice}
            lowPriceForecast={lowBitcoinPrice}
            icon={itemIcon}
          />
        )
      })}
    </div>
  )
}
