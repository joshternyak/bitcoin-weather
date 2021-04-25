import React from "react"
import "./share-buttons.scss"
import facebook from "../../assets/images/facebook.svg"
import twitter from "../../assets/images/twitter.svg"

export default function ShareButtons({ shareCount }) {
  return (
    <div className="ShareButtons">
      <a
        className="ShareButtons__btn"
        href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fbitcointemp.com%2F&amp;src=sdkpreparse"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={facebook}
          className="ShareButtons__logo"
          alt="facebook logo"
        />
      </a>
      <a
        className="ShareButtons__btn"
        target="_blank"
        rel="noreferrer"
        href="https://twitter.com/intent/tweet?url=bitcointemp.com&text=See%20real-time%20price%20predictions%20for%20Bitcoin%20at"
        data-text="See real-time price predictions for Bitcoin."
        data-url="https://bitcointemp.com"
        data-hashtags="Bitcoin, Crypto"
        data-via="Bitcoin, Crypto"
      >
        <img src={twitter} className="ShareButtons__logo" alt="twitter logo" />
      </a>
      <div className="ShareButtons__footer">
        <p className="ShareButtons__share-count-label">Shares</p>
        <p className="ShareButtons__share-count">{shareCount}</p>
      </div>
    </div>
  )
}
