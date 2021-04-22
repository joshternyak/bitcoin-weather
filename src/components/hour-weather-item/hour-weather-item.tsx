import React from "react"
import "./hour-weather-item.scss"

export default function HourWeatherItem({ price }: any) {
  return (
    <div className="HourWeatherItem">
      <p className="HourWeatherItem__time">Now</p>
      <div className="HourWeatherItem__weather-icon"></div>
      <p className="HourWeatherItem__price">${price}</p>
    </div>
  )
}
