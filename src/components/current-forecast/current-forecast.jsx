import React from "react"
import "./current-forecast.scss"
import { currentDay } from "../../helpers"
import numeral from "numeral"

export default function CurrentForecast({
  theme,
  currentPrice,
  bitcoinPriceNum,
}: any) {
  const lowBitcoinPrice = bitcoinPriceNum
  console.log(lowBitcoinPrice)
  const bitcoinPrice = numeral(lowBitcoinPrice).format("0.0a")
  const bitcoinPriceDisplay = `$${bitcoinPrice}`

  return (
    <div className="CurrentForecast">
      <p className="CurrentForecast__location">Minnesota</p>
      <p className="CurrentForecast__weather-type">{theme}</p>
      <h1 className="CurrentForecast__price">{currentPrice}</h1>

      <div className="CurrentForecast__details">
        <div className="CurrentForecast__flex-group">
          <p className="CurrentForecast__today">{currentDay}</p>
          <p className="CurrentForecast__label">Today</p>
        </div>
        <div className="CurrentForecast__flex-group">
          <p className="CurrentForecast__high-price">{currentPrice}</p>
          <p className="CurrentForecast__low-price">{bitcoinPriceDisplay}</p>
        </div>
      </div>
    </div>
  )
}
