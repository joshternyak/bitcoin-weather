import React from "react"
import Navbar from "./components/navbar/navbar"
import AppCreators from "./components/app-creators/app-creators"
import CurrentForecast from "./components/current-forecast/current-forecast"
import "./App.scss"
import "antd/dist/antd.css"

export default function App() {
  return (
    <div className="App">
      <div className="App__inner">
        <Navbar />
        <AppCreators />
        <CurrentForecast />
      </div>
    </div>
  )
}
