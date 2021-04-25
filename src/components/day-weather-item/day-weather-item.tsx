import React from "react"
import "./day-weather-item.scss"

export default function DayWeatherItem({
  day,
  highPriceForecast,
  lowPriceForecast,
  today,
  icon,
}: any) {
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
        <div className="DayWeatherItem__weather-icon">
          <img src={icon} alt="icon" />
        </div>
      </div>
      <div className="DayWeatherItem__col">
        <div className="DayWeatherItem__price-group">
          <p
            className={`DayWeatherItem__price ${
              today ? "DayWeatherItem__price--today" : ""
            }`}
          >
            {today ? `${highPriceForecast}` : `$${highPriceForecast}`}
          </p>
          <p
            className={`DayWeatherItem__price DayWeatherItem__price--low ${
              today ? "DayWeatherItem__price--low-today" : ""
            }`}
          >
            {today ? `${lowPriceForecast}` : `$${lowPriceForecast}`}
          </p>
        </div>
      </div>
    </div>
  )
}
