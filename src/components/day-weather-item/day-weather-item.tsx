import React from "react"
import "./day-weather-item.scss"

export default function DayWeatherItem({ day, price }: any) {
  return (
    <div className="DayWeatherItem">
      <div className="DayWeatherItem__col">
        <div className="DayWeatherItem__day">{day}</div>
      </div>
      <div className="DayWeatherItem__col">
        <div className="DayWeatherItem__weather-icon"></div>
      </div>
      <div className="DayWeatherItem__col">
        <div className="DayWeatherItem__price-group">
          <p className="DayWeatherItem__price">${price}</p>
          <p className="DayWeatherItem__price DayWeatherItem__price--low">
            $30.5K
          </p>
        </div>
      </div>
    </div>
  )
}
