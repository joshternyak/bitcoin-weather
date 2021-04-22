import React from "react"
import lightcloud from "../../../assets/images/light-cloud.png"
import darkcloud from "../../../assets/images/dark-cloud.png"
import LightningBolt from "./lightning-bolt/lightning-bolt"
import "./cloud.scss"

export default function Cloud() {
  const isWeatherSunny = true

  return (
    <>
      <img
        src={isWeatherSunny ? lightcloud : darkcloud}
        alt="cloud"
        className="Cloud"
      />
      {!isWeatherSunny && <LightningBolt />}
    </>
  )
}
