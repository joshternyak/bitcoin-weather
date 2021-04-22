import React from "react"
import "./current-forecast.scss"

export default function CurrentForecast({theme}: any) {
  return (
    <div className="CurrentForecast">
      <p className="CurrentForecast__location">Minnesota</p>
      <p className="CurrentForecast__weather-type">{theme}</p>
      <h1 className="CurrentForecast__price">$39.9K</h1>
      
      <div className="CurrentForecast__details">
        <div className="CurrentForecast__flex-group">
          <p className="CurrentForecast__today">Sunday</p>
          <p className="CurrentForecast__label">Today</p>
        </div>
        <div className="CurrentForecast__flex-group">
          <p className="CurrentForecast__high-price">$42.9K</p>
          <p className="CurrentForecast__low-price">$32.4K</p>
        </div>
      </div>
    </div>
  )
}
