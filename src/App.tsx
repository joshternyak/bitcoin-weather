import React, { useState } from "react"
import Navbar from "./components/navbar/navbar"
import AppCreators from "./components/app-creators/app-creators"
import CurrentForecast from "./components/current-forecast/current-forecast"
import Sky from "./components/sky/sky"
import HourlyForecast from "./components/hourly-forecast/hourly-forecast"
import WeeklyForecast from "./components/weekly-forecast/weekly-forecast"
import "./App.scss"
import "antd/dist/antd.css"

export default function App() {
  const [theme, setTheme] = useState("sunny")
  const [cloudy, setCloudy] = useState(false)
  const [night, setNight] = useState(false)

  const setStormTheme = () => {
    setTheme("storm")
    setCloudyTheme()
  }

  const setCloudyTheme = () => {
    setCloudy(true)
  }

  const setNightTheme = () => {
    setNight(true)
  }

  const setSunnyTheme = () => {
    setTheme("sunny")
    setNight(false)
  }

  return (
    <div className="App">
      <div className="App__inner">
        <div className="App__inner-container">
          <button onClick={setNightTheme}>Night theme</button>
          <button onClick={setStormTheme}>Storm theme</button>
          <button onClick={setSunnyTheme}>Sunny theme</button>
          <button onClick={setCloudyTheme}>Cloudy theme</button>
          <Navbar />
          <AppCreators />
          <CurrentForecast theme={theme} />
          <HourlyForecast />
          <WeeklyForecast />
        </div>
        <Sky cloudy={cloudy} night={night} theme={theme} />
      </div>
    </div>
  )
}
