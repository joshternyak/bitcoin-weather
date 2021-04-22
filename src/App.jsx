import React, { useState, useEffect } from "react"
import Navbar from "./components/navbar/navbar"
import AppCreators from "./components/app-creators/app-creators"
import CurrentForecast from "./components/current-forecast/current-forecast"
import Sky from "./components/sky/sky"
import HourlyForecast from "./components/hourly-forecast/hourly-forecast"
import WeeklyForecast from "./components/weekly-forecast/weekly-forecast"
import "./App.scss"
import "antd/dist/antd.css"

export default function App() {
  const hours = new Date().getHours()
  const isDayTime = hours > 6 && hours < 20
  const [theme, setTheme] = useState("sunny")
  const [cloudy, setCloudy] = useState(false)
  const [night, setNight] = useState(!isDayTime)
  const [priceData, setPriceData] = useState(null)
  const [currency, setCurrency] = useState(null)

  useEffect(() => {
    async function fetchPrices() {
      const res = await fetch(
        "https://api.coindesk.com/v1/bpi/currentprice.json"
      )
      const data = await res.json()
      setCurrency(data.bpi.USD.code)
      setPriceData(data.bpi)
      setCurrency("USD")
    }
    fetchPrices()
  }, [])

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

  const bitcoinPrice = priceData && priceData[currency].rate
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
          <CurrentForecast currentPrice={bitcoinPrice} theme={theme} />
          <HourlyForecast />
          <WeeklyForecast />
        </div>
        <Sky cloudy={cloudy} night={night} theme={theme} />
      </div>
    </div>
  )
}
