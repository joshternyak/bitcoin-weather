import React from "react";
import Sun from "./sun";
import Cloud from "./cloud";
import Rain from "./rain";
import Moon from "./moon";
import { randomNumberNoRound } from "@/public/helpers";

export default function Sky({ weatherState: { theme, cloudy, night } }) {
  let showClouds = false;

  showClouds = cloudy || theme === "storm" || night;

  return (
    <div className={`Sky Sky--${theme} ${night ? "Sky--night" : ""} `}>
      {theme === "sunny" && !night && <Sun />}
      {night && <Moon randomNumberNoRound={randomNumberNoRound} />}
      {showClouds && <Cloud theme={theme} night={night} />}
      {theme === "storm" && <Rain randomNumberNoRound={randomNumberNoRound} />}
      <style jsx>{`
        .Sky {
          position: fixed;
          top: 0px;
          left: 0px;
          width: 100vw;
          height: 100vh;
          user-select: none;
          z-index: -100;
          transition: background 1.5s;
        }

        .Sky img {
          width: 100%;
        }

        .Sky--sunny {
          background: linear-gradient(195.24deg, #b0d1e6 2.07%, #5f9dff 97.37%),
            #ffffff;
        }

        .Sky--storm {
          background: #163e7c;
        }

        .Sky--night {
          background: #131a33;
        }
      `}</style>
    </div>
  );
}
