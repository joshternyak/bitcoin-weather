import React from "react"
import "./featured-on-press.scss"
import kare11 from "../../assets/images/kare-11.png"
import nytimes from "../../assets/images/new-york-times.png"
import theverge from "../../assets/images/the-verge.png"

const logos = [
  {
    img: kare11,
    name: "kare 11",
  },
  {
    img: nytimes,
    name: "new york times",
  },
  {
    img: theverge,
    name: "the verge",
  },
]

export default function FeaturedOnPress() {
  return (
    <div className="FeaturedOnPress">
      <h3 className="FeaturedOnPress__title">As seen on:</h3>
      <div className="FeaturedOnPress__divider" />
      <div className="FeaturedOnPress__logo-grid">
        {logos.map((logo, index) => {
          return (
            <div className="FeaturedOnPress__logo" key={index}>
              <img
                src={logo.img}
                alt={logo.name}
                className="FeaturedOnPress__logo-img"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
