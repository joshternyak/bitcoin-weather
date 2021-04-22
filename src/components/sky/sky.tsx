import React from "react"
import "./sky.scss"
import Sun from "./sun/sun"
import Cloud from "./cloud/cloud"
import Rain from "./rain/rain"

export default function Sky() {
  return (
    <div className="Sky">
      <Sun />
      <Cloud />
      {false && <Rain />}
    </div>
  )
}
