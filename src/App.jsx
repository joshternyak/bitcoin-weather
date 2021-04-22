import React, { useState, useEffect } from "react"
import Navbar from "./components/navbar/navbar"
import AppCreators from "./components/app-creators/app-creators"
import CurrentForecast from "./components/current-forecast/current-forecast"
import Sky from "./components/sky/sky"
import HourlyForecast from "./components/hourly-forecast/hourly-forecast"
import WeeklyForecast from "./components/weekly-forecast/weekly-forecast"
import PoweredBy from "./components/powered-by/powered-by"
import "./App.scss"
import "antd/dist/antd.css"
import numeral from "numeral"

export default function App() {
  const hours = new Date().getHours()
  const isDayTime = hours > 6 && hours < 20
  const [theme, setTheme] = useState("sunny")
  const [cloudy, setCloudy] = useState(false)
  const [night, setNight] = useState(!isDayTime)
  const [priceData, setPriceData] = useState(null)
  const [currency, setCurrency] = useState(null)
  const [loading, setLoading] = useState(true)

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
    setTimeout(() => {
      setLoading(false)
    }, 1500)
    const interval = setInterval(() => {
      fetchPrices()
    }, 1000)
    return () => clearInterval(interval)
  })

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

  const unRoundedBitcoinPrice = priceData && priceData[currency].rate
  const bitcoinPrice = numeral(unRoundedBitcoinPrice).format("0.0a")
  const bitcoinPriceDisplay = `$${bitcoinPrice}`

  return (
    <div className="App">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="App__inner">
          <div className="App__inner-container">
            <button onClick={setNightTheme}>Night theme</button>
            <button onClick={setStormTheme}>Storm theme</button>
            <button onClick={setSunnyTheme}>Sunny theme</button>
            <button onClick={setCloudyTheme}>Cloudy theme</button>
            <Navbar />
            <AppCreators />
            <CurrentForecast
              bitcoinPriceNum={unRoundedBitcoinPrice}
              currentPrice={bitcoinPriceDisplay}
              theme={theme}
            />
            <HourlyForecast />
            <WeeklyForecast />
          </div>
          <Sky cloudy={cloudy} night={night} theme={theme} />
          <PoweredBy />
        </div>
      )}
    </div>
  )
}
