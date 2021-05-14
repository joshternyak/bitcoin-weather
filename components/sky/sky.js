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
          background: linear-gradient(195.24deg, #aadbff 2.07%, #5f9dff 97.37%);
        }

        .Sky--storm {
          background: linear-gradient(195.24deg, #486cc9 2.07%, #163e7c 97.37%);
        }

        .Sky--night {
          background: linear-gradient(
            339.09deg,
            #131a33 27.69%,
            #303d6a 80.69%
          );
        }
      `}</style>
    </div>
  );
}
