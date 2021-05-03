import React from "react"
import "./sky.scss"
import Sun from "./sun/sun"
import Cloud from "./cloud/cloud"
import Rain from "./rain/rain"
import Moon from "./moon/moon"
import { randomNumber } from "../../helpers"

export default function Sky({ weatherState: { theme, cloudy, night } }) {
  return (
    <div className={`Sky Sky--${theme} ${night ? "Sky--night" : ""} `}>
      {theme === "sunny" && !night && <Sun />}
      {night && <Moon />}
      {cloudy && <Cloud theme={theme} night={night} />}
      {theme === "storm" && <Rain randomNumber={randomNumber} />}
    </div>
  )
}
