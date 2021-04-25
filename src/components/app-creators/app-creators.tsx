import React from "react"
import "./app-creators.scss"
import josh from "../../assets/images/josh-ternyak.png"
import jordan from "../../assets/images/jordan-tuwiner.jpeg"
import { Tooltip } from "antd"

export default function AppCreators() {
  return (
    <div className="AppCreators">
      <a
        href="mailto:joshternyak@gmail.com"
        className="AppCreators__contact-link"
      >
        Contact Us
      </a>
      <div className="AppCreators__col">
        <div className="AppCreators__created-by-label">Creators:</div>
        <Tooltip placement="bottomRight" title="Jordan Tuwiner">
          <img
            src={jordan}
            alt="jordan tuwiner"
            className="AppCreators__creator"
          />
        </Tooltip>
        <Tooltip placement="bottomRight" title="Josh Ternyak">
          <img src={josh} alt="josh ternyak" className="AppCreators__creator" />
        </Tooltip>
      </div>
    </div>
  )
}
