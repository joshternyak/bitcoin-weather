import React from "react"
import "./powered-by.scss"

export default function PoweredBy() {
  return (
    <div className="PoweredBy">
      Powered by{" "}
      <a
        href="https://www.coindesk.com/price/bitcoin"
        target="_blank"
        rel="noreferrer"
        className="PoweredBy__link"
      >
        Coindesk
      </a>
    </div>
  )
}
