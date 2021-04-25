import React from "react"
import "./loading.scss"
import Navbar from "../navbar/navbar"
import jerome from "../../assets/images/jerome-powell-printing-cash.gif"
import bitcoinSpinner from "../../assets/images/bitcoin-spinner.png"

function Loading() {
  const randomFacts = [
    "The first purchase ever with bitcoin was for pizza.",
    "The inventor of Bitcoin is a mystery.",
    "There will only ever be 21 million bitcoins.",
    "Bitcoin is untraceable & Bitcoin is NOT untraceable.",
    "If you lose your Bitcoin private key, you lose your bitcoins.",
  ]

  const generateRandomItem = (items) => {
    return randomFacts[Math.floor(Math.random() * randomFacts.length)]
  }

  const randomFact = generateRandomItem(randomFacts)

  return (
    <div className="Loading">
      <Navbar />
      <div className="Loading__inner">
        <div className="Loading__col">
          <h3 className="Loading__subtitle">DID YOU KNOW?</h3>
          <h1 className="Loading__title">{randomFact}</h1>
          <div className="Loading__bitcoin-spinner">
            <img src={bitcoinSpinner} alt="bitcoin" />
          </div>
        </div>
        <div className="Loading__col">
          <img src={jerome} alt="jerome powell" className="Loading__gif" />
        </div>
      </div>
    </div>
  )
}

export default Loading
