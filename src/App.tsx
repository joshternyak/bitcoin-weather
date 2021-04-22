import React from "react"
import Navbar from "./components/navbar/navbar"
import AppCreators from "./components/app-creators/app-creators"
import CurrentForecast from "./components/current-forecast/current-forecast"
import Sky from "./components/sky/sky"
import HourlyForecast from "./components/hourly-forecast/hourly-forecast"
import WeeklyForecast from "./components/weekly-forecast/weekly-forecast"
import "./App.scss"
import "antd/dist/antd.css"

export default function App() {
  return (
    <div className="App">
      <div className="App__inner">
        <div className="App__inner-container">
          <Navbar />
          <AppCreators />
          <CurrentForecast />
          <HourlyForecast />
          <WeeklyForecast/>
        </div>
        <Sky />
      </div>
    </div>
  )
}
