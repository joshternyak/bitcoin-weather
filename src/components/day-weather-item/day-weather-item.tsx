import React from "react"
import "./day-weather-item.scss"

export default function DayWeatherItem({ day, price, today }: any) {
  return (
    <div className={`DayWeatherItem ${today ? "DayWeatherItem--today" : ""}`}>
      <div className="DayWeatherItem__col">
        <div
          className={`DayWeatherItem__day ${
            today ? "DayWeatherItem__day--today" : ""
          } `}
        >
          {day}
        </div>
      </div>
      <div className="DayWeatherItem__col">
        <div className="DayWeatherItem__weather-icon"></div>
      </div>
      <div className="DayWeatherItem__col">
        <div className="DayWeatherItem__price-group">
          <p
            className={`DayWeatherItem__price ${
              today ? "DayWeatherItem__price--today" : ""
            }`}
          >
            {today ? `${price}` : `$${price}`}
          </p>
          <p
            className={`DayWeatherItem__price DayWeatherItem__price--low ${
              today ? "DayWeatherItem__price--low-today" : ""
            }`}
          >
            $30.5K
          </p>
        </div>
      </div>
    </div>
  )
}
