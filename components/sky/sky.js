import Sun from "./sun";
import Cloud from "./cloud";
import Rain from "./rain";
import Moon from "./moon";
import { randomNumberNoRound } from "@/public/helpers";

export default function Sky({ weather: {isDay, weatherType} }) {

  const clouds = weatherType === "cloudy" || weatherType === "storm";

  return (
    <div
      className={`Sky ${
        !isDay ? `Sky--night Sky--${weatherType}` : `Sky--${weatherType}`
      } `}
    >
      {weatherType === "clear" && isDay && <Sun />}
      {!isDay && <Moon randomNumberNoRound={randomNumberNoRound} />}
      {clouds && <Cloud weather={weatherType} isDay={isDay} />}
      {weatherType === "storm" && (
        <Rain randomNumberNoRound={randomNumberNoRound} />
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
          transition: background 1.5s;
        }

        .Sky img {
          width: 100%;
        }

        .Sky--clear:not(.Sky--night),
        .Sky--cloudy:not(.Sky--night) {
          background: linear-gradient(195.24deg, #b0d1e6 2.07%, #5f9dff 97.37%),
            #ffffff;
        }

        .Sky--storm {
          background: linear-gradient(195.24deg, #486cc9 2.07%, #10356d 97.37%),
            #ffffff;
        }

        .Sky--night {
          background: linear-gradient(339.09deg, #131a33 27.69%, #303d6a 80.69%),
            #ffffff;
        }
      `}</style>
    </div>
  );
}
