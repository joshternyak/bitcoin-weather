import React from "react";
import { Tooltip } from "antd";

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
            src={"/static/images/jordan-tuwiner.jpeg"}
            alt="jordan tuwiner"
            className="AppCreators__creator"
          />
        </Tooltip>
        <Tooltip placement="bottomRight" title="Josh Ternyak">
          <img
            src={"/static/images/josh-ternyak.png"}
            alt="josh ternyak"
            className="AppCreators__creator"
          />
        </Tooltip>
      </div>
      <style jsx>
        {`
          .AppCreators {
            display: flex;
            align-items: center;
            position: fixed;
            top: 10px;
            right: 5px;
          }
          .AppCreators__contact-link {
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            color: rgba(255, 255, 255, 0.65);
            padding-right: 10px;
          }
          .AppCreators__contact-link:hover {
            color: rgba(255, 255, 255, 0.55);
          }
          .AppCreators__created-by-label {
            display: none;
            font-style: normal;
            font-weight: 500;
            font-size: 15px;
            color: #ffffff;
            margin-right: 10px;
          }
          .AppCreators__col {
            display: flex;
            align-items: center;
          }
          @media (max-width: 650px) {
            .AppCreators {
              position: relative;
              top: unset;
              right: unset;
              justify-content: space-between;
              margin: 40px 0 10px 0;
            }
            .AppCreators__created-by-label {
              display: block;
            }
          }
          .AppCreators__creator {
            border: 3px solid rgba(255, 255, 255, 0.5);
            border-radius: 25px;
            width: 37px;
            object-fit: cover;
            margin: 0px 5px;
            cursor: pointer;
            transition: 0.2s;
          }
          .AppCreators__creator:hover {
            opacity: 0.8;
            border-color: rgba(255, 255, 255, 0.8);
          }
        `}
      </style>
    </div>
  );
}
