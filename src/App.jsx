import React, { useState, useEffect } from "react"
import Navbar from "./components/navbar/navbar"
import AppCreators from "./components/app-creators/app-creators"
import CurrentForecast from "./components/current-forecast/current-forecast"
import Sky from "./components/sky/sky"
import HourlyForecast from "./components/hourly-forecast/hourly-forecast"
import WeeklyForecast from "./components/weekly-forecast/weekly-forecast"
import PoweredBy from "./components/powered-by/powered-by"
import Loading from "./components/loading/loading"
import "./App.scss"
import "antd/dist/antd.css"
import numeral from "numeral"

export default function App() {
  // Time variables
  const [loading, setLoading] = useState(true)
  const hours = new Date().getHours()
  const isDayTime = hours > 6 && hours < 20

  // Weather variables
  const [theme, setTheme] = useState("sunny")
  const [cloudy, setCloudy] = useState(false)
  const [night, setNight] = useState(!isDayTime)

  const weatherState = {
    theme,
    cloudy,
    night,
  }

  // Bitcoin price API variables
  const [priceData, setPriceData] = useState(null)
  const [currency, setCurrency] = useState(null)
  const unRoundedBitcoinPrice = priceData && priceData[currency].rate
  const bitcoinPrice = numeral(unRoundedBitcoinPrice).format("0.0a")
  const bitcoinPriceDisplay = `$${bitcoinPrice}`
  const unRoundedBitcoinPriceAsNum = parseInt(unRoundedBitcoinPrice)

  // For fetching the current bitcoin price
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
  }, [currency, priceData, loading])

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
  // Show storm theme if price of bitcoin is more than $50K
  const stormInterval = setInterval(() => {
    if (unRoundedBitcoinPriceAsNum > 50) setStormTheme()
  }, 1000)

  // Show cloudy theme if price of bitcoin is less than $40K
  const cloudyInterval = setInterval(() => {
    if (unRoundedBitcoinPriceAsNum < 40) setCloudyTheme()
  }, 1000)

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <div className="App__inner">
          <div className="App__inner-container">
            <button onClick={setNightTheme}>Night</button>
            <button onClick={setStormTheme}>Storm</button>
            <button onClick={setSunnyTheme}>Sunny</button>
            <button onClick={setCloudyTheme}>Cloudy</button>
            <Navbar />
            <AppCreators />
            <CurrentForecast
              bitcoinPriceNum={unRoundedBitcoinPrice}
              currentPrice={bitcoinPriceDisplay}
              weatherState={weatherState}
            />
            <HourlyForecast />
            <WeeklyForecast />
          </div>
          <Sky weatherState={weatherState} />
          <PoweredBy />
        </div>
      )}
    </div>
  )
}
