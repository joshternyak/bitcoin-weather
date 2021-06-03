import React from "react";

export default function DayWeatherItem({
  day,
  highPriceForecast,
  lowPriceForecast,
  today,
  icon,
}) {
  return (
    <div className="DayWeatherItem">
      <div className="DayWeatherItem__col">
        <div className="DayWeatherItem__day">{day}</div>
      </div>
      <div className="DayWeatherItem__col">
        <div className="DayWeatherItem__weather-icon">
          <img src={"/static/images/" + icon} alt="icon" />
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
      <style jsx>
        {`
          .DayWeatherItem {
            display: flex;
            justify-content: space-between;
            padding: 6px 10px;
            align-items: center;
            height: 50px;
          }
          .DayWeatherItem__col {
            flex-basis: 33%;
            display: flex;
          }
          .DayWeatherItem__col:nth-child(2) {
            justify-content: center;
          }
          .DayWeatherItem__col:nth-child(3) {
            justify-content: flex-end;
          }
          .DayWeatherItem__day {
            font-style: normal;
            font-weight: 500;
            font-size: 15px;
            line-height: 100%;
            color: #ffffff;
            width: 90px;
          }
          .DayWeatherItem__day--today {
            color: black;
          }
          .DayWeatherItem__weather-icon {
            width: 35px;
          }
          .DayWeatherItem__weather-icon img {
            width: 100%;
            height: auto;
          }
          .DayWeatherItem__price-group {
            display: flex;
            align-items: center;
          }
          .DayWeatherItem__price {
            font-style: normal;
            font-weight: 500;
            font-size: 15px;
            line-height: 100%;
            margin: 0px;
            color: #ffffff;
            text-transform: uppercase;
          }
          .DayWeatherItem__price--low {
            color: rgba(255, 255, 255, 0.5);
            padding-left: 10px;
          }
        `}
      </style>
    </div>
  );
}
