import React from "react";
import Sun from "./sun";
import Cloud from "./cloud";
import Rain from "./rain";
import Moon from "./moon";
import { randomNumber, randomNumberNoRound } from "@/public/helpers";

export default function Sky({ weatherState: { theme, cloudy, night } }) {
  return (
    <div className={`Sky Sky--${theme} ${night ? "Sky--night" : ""} `}>
      {theme === "sunny" && !night && <Sun />}
      {night && <Moon />}
      {cloudy && <Cloud theme={theme} night={night} />}
      {theme === "storm" && (
        <Rain
          randomNumber={randomNumber}
          randomNumberNoRound={randomNumberNoRound}
        />
      )}
      <style jsx>{`
        .Sky {
          position: fixed;
          top: 0px;
          left: 0px;
          width: 100vw;
          height: 100vh;
          user-select: none;
          z-index: -100;
        }

        .Sky img {
          width: 100%;
        }

        .Sky--sunny {
          background: linear-gradient(195.24deg, #47bfdf 2.07%, #4a91ff 97.37%);
        }

        .Sky--storm {
          background: linear-gradient(195.24deg, #507ced 2.07%, #214f96 97.37%);
        }

        .Sky--night {
          background: linear-gradient(
            195.24deg,
            #485e96 2.07%,
            #1d2737 97.37%
          ) !important;
        }
      `}</style>
    </div>
  );
}
