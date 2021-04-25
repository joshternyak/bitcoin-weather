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
    <div className="DayWeatherItem">
      <div className="DayWeatherItem__col">
        <div className="DayWeatherItem__day">{day}</div>
      </div>
      <div className="DayWeatherItem__col">
        <div className="DayWeatherItem__weather-icon">
          <img src={icon} alt="icon" />
        </div>
      </div>
      <div className="DayWeatherItem__col">
        <div className="DayWeatherItem__price-group">
          <p className="DayWeatherItem__price">
            {today ? `${highPriceForecast}` : `$${highPriceForecast}`}
          </p>
          <p className="DayWeatherItem__price DayWeatherItem__price--low">
            {today ? `${lowPriceForecast}` : `$${lowPriceForecast}`}
          </p>
        </div>
      </div>
    </div>
  )
}
