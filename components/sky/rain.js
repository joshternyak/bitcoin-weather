export default function Rain({ randomNumber, randomNumberNoRound }) {
  var amount;
  let rainDrops = [];
  setTimeout(() => {
    rainDrops = [];
  }, 2000);

  for (amount = 0; amount < 30; amount++) {
    const randomSpeed = randomNumberNoRound(1, 2);
    const randomDelay = randomNumberNoRound(0, 5);
    const randomLeftNum = randomNumberNoRound(0, 100);
    const randomTopNum = randomNumberNoRound(-300, -50);
    const randomSize = randomNumberNoRound(0, 30);

    rainDrops.push(
      <RainDroplet
        key={amount}
        randomSpeed={randomSpeed}
        randomDelay={randomDelay}
        randomLeftNumber={randomLeftNum}
        randomTopNumber={randomTopNum}
        randomSize={randomSize}
      />
    );
    console.log(amount, " is the length");
  }

  return <div className="Rain">{rainDrops}</div>;
}

const RainDroplet = ({
  randomSpeed,
  randomDelay,
  randomLeftNumber,
  randomTopNumber,
  randomSize,
}) => {
  return (
    <>
      <img
        src="./static/images/bitcoin-raindrop.svg"
        style={{
          left: `${randomLeftNumber}%`,
          top: `${randomTopNumber}px`,
          width: `${randomSize + 20}px`,
          height: `${randomSize + 20}px`,
        }}
        className="raindrop"
      ></img>
      <style jsx>{`
        @keyframes droplet {
          from {
            top: ${randomTopNumber};
            opacity: 1;
          }
          to {
            top: 100vh;
            opacity: 0;
          }
        }
        .raindrop {
          z-index: -100;
          border-radius: 50%;
          background: gold;
          filter: blur(${(randomSize - 30) * -0.1}px);
          animation: droplet ${randomSpeed}s ease-in infinite;
          animation-delay: ${randomDelay}s;
          position: fixed;
        }
      `}</style>
    </>
  );
};
