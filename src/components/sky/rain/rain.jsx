import React from "react"
import "./rain.scss"
import styled from "styled-components"
import bitcoinDroplet from "../../../assets/images/bitcoin-raindrop.svg"

export default function Rain({ randomNumber }) {
  var amount
  let rainDrops = []
  setTimeout(() => {
    rainDrops = []
  }, 2000)

  for (amount = 0; amount < 30; amount++) {
    const randomLeftNum = randomNumber(0, 2000)
    const randomTopNum = randomNumber(-200, 100)
    const randomSize = randomNumber(30, 60)

    rainDrops.push(
      <RainDroplet
        key={amount}
        randomLeftNumber={randomLeftNum}
        randomTopNumber={randomTopNum}
        randomSize={randomSize}
      />
    )
    console.log(amount, " is the length")
  }
  
  return <div className="Rain">{rainDrops}</div>
}

const RainDroplet = ({ randomLeftNumber, randomTopNumber, randomSize }) => {
  return (
    <RainDrop
      src={bitcoinDroplet}
      style={{
        left: `${randomLeftNumber}px`,
        top: `${randomTopNumber}px`,
        width: `${randomSize}px`,
        height: `${randomSize}px`,
      }}
    ></RainDrop>
  )
}

const RainDrop = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: gold;
  animation-name: droplet;
  animation-duration: 2s;
  position: fixed;

  @keyframes droplet {
    from {
      top: $randomTopNumber;
    }
    to {
      top: 100vh;
    }
  }
`
