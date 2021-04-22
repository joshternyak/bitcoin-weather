import React from "react"
import "./sky.scss"
import Sun from "./sun/sun"
import Cloud from "./cloud/cloud"
import Rain from "./rain/rain"
import Moon from "./moon/moon"

export default function Sky({ theme, cloudy, night }: any) {
  return (
    <div className={`Sky Sky--${theme} ${night ? "Sky--night" : ""} `}>
      {theme === "sunny" && !night && <Sun />}
      {night && <Moon />}
      {cloudy && <Cloud theme={theme} night={night} />}
      {theme === "storm" && <Rain />}
    </div>
  )
}
