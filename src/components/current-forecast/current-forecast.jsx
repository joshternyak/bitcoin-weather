import React from "react"
import "./current-forecast.scss"
import { currentDay } from "../../helpers"
import numeral from "numeral"

export default function CurrentForecast({
  currentPrice,
  bitcoinPriceNum,
  weatherState: { theme, cloudy, night },
}) {
  const lowBitcoinPrice = parseInt(bitcoinPriceNum) / 2
  const bitcoinPrice = numeral(lowBitcoinPrice).format("0.0a")
  const bitcoinPriceDisplay = `$${bitcoinPrice}`

  const isWeatherClear = night && theme !== "storm" && theme !== "cloudy"

  if (isWeatherClear) {
    theme = "Clear"
  }

  const weatherType = !night && theme !== "storm" && !cloudy ? "Clear" : theme

  return (
    <div className="CurrentForecast">
      <p className="CurrentForecast__location">Planet Earth</p>
      <p className="CurrentForecast__weather-type">{weatherType === "storm" ? "Bitcoin Storm!" : weatherType}</p>
      <h1 className="CurrentForecast__price">{currentPrice}</h1>

      <div className="CurrentForecast__details">
        <div className="CurrentForecast__flex-group">
          <p className="CurrentForecast__today">{currentDay}</p>
          <p className="CurrentForecast__label">Today</p>
        </div>
        <div className="CurrentForecast__flex-group">
          <p className="CurrentForecast__high-price">{currentPrice}</p>
          <p className="CurrentForecast__low-price">{bitcoinPriceDisplay}K</p>
        </div>
      </div>
    </div>
  )
}
