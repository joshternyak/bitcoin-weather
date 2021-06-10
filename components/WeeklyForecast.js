import React from "react";
import DayWeatherItem from "./DayWeatherItem";
import { currentDay } from "../public/helpers";
import numeral from "numeral";

import { Line } from "react-chartjs-2";

export default function WeeklyForecast({
  priceToday,
  lastWeekHighs,
  lastWeekLows,
}) {
  const pastDates = [];

  for (let i = 0; i < 7; i++) {
    let date = new Date();
    date.setDate(date.getDate() - i - 1);
    pastDates.push(`${date.getMonth() + 1} / ${date.getDate()}`);
  }
  const data = {
    labels: pastDates.reverse(),
    datasets: [
      {
        label: "BTC Closing Highs",
        data: lastWeekHighs,
        cubicInterpolationMode: "monotone",
        fill: true,
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderColor: "rgb(255, 255, 255)",
      },
    ],
  };

  // const options = {
  //   scales: {
  //     x: {
  //       grid: {
  //         tickColor: "white",
  //       },
  //       ticks: {
  //         color: "white",
  //         family: "Kumbh Sans",
  //         font: {
  //           family: "Kumbh Sans",
  //         },
  //       },
  //     },
  //     y: {
  //       grid: {
  //         tickColor: "white",
  //       },
  //       ticks: {
  //         color: "white",
  //         stepSize: 5000,
  //         font: {
  //           family: "Kumbh Sans",
  //         },
  //       },
  //       // the data minimum used for determining the ticks is Math.min(dataMin, suggestedMin)
  //       min: Math.round(Math.min(...lastWeekHighs) / 1000) * 1000 - 5000,

  //       // the data maximum used for determining the ticks is Math.max(dataMax, suggestedMax)
  //       max: Math.round(Math.max(...lastWeekHighs) / 1000) * 1000 + 5000,
  //     },
  //   },
  //   plugins: {
  //     title: {
  //       display: true,
  //       text: "BTC Highs",
  //       color: "white",
  //       font: { size: 18, family: "Kumbh Sans" },
  //       padding: {
  //         top: 20,
  //         bottom: 20,
  //       },
  //     },
  //     legend: {
  //       display: false,
  //       labels: {
  //         color: "white",
  //         font: {
  //           family: "Kumbh Sans",
  //         },
  //       },
  //     },
  //   },
  // };
  return (
    <>
      <div className="WeeklyForecast">
        <div className="WeeklyForecast__title">Past 7 Days</div>
        {pastDates.map((item, index) => {
          let itemIcon;
          let highBitcoinPrice, lowBitcoinPrice;
          highBitcoinPrice = numeral(lastWeekHighs[index]).format("0.0a");
          lowBitcoinPrice = numeral(lastWeekLows[index]).format("0.0a");
          if (lastWeekHighs[index] - lastWeekHighs[index - 1] > 1000) {
            itemIcon = "small-storm-cloud.svg";
          } else if (lastWeekHighs[index] - lastWeekHighs[index - 1] < 0) {
            itemIcon = "small-regular-cloud.svg";
          } else {
            itemIcon = "small-sun.svg";
          }
          return (
            <DayWeatherItem
              key={index}
              day={item}
              highPriceForecast={highBitcoinPrice}
              lowPriceForecast={lowBitcoinPrice}
              icon={itemIcon}
            />
          );
        })}
        <style jsx>
          {`
            .WeeklyForecast {
              width: 100%;
              padding: 10px 0;
              border-top: 1px solid #ffffff40;
            }
            .WeeklyForecast__title {
              font-size: 1.5em;
              color: white;
              font-weight: 700;
              padding: 10px;
            }
          `}
        </style>
      </div>
      {/* <Line data={data} options={options} /> */}
    </>
  );
}
