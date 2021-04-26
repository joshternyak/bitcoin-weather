import React from "react"
import lightcloud from "../../../assets/images/light-cloud.png"
import darkcloud from "../../../assets/images/dark-cloud.png"
import LightningBolt from "./lightning-bolt/lightning-bolt"
import "./cloud.scss"

export default function Cloud({ theme, night }: any) {
  return (
    <>
      <img src={night ? darkcloud : lightcloud} alt="cloud" className="Cloud" />

      {theme === "storm" && <LightningBolt />}
    </>
  )
}
