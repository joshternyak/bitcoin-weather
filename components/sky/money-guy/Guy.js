import React from "react";

function Guy() {
  return (
    <div>
      <img
        src="./static/images/transparent-money-guy.gif"
        alt="guy"
        className="Guy"
      />
      <style jsx>
        {`
          .Guy {
            max-width: 140px;
            z-index: 300;
          }
        `}
      </style>
    </div>
  );
}

export default Guy;
