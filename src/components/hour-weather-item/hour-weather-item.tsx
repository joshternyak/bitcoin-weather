import React from "react"
import "./hour-weather-item.scss"

export default function HourWeatherItem({ price, icon }: any) {
  return (
    <div className="HourWeatherItem">
      <p className="HourWeatherItem__time">Now</p>
      <div className="HourWeatherItem__weather-icon">
        <img src={icon} alt="icon" />
      </div>
      <p className="HourWeatherItem__price">${price}</p>
    </div>
  )
}
