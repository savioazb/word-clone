import React from "react";
import Banner from "../Banner/Banner";

function WonBanner({guessesLength}) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>
          {" "}
          {guessesLength} {`${guessesLength === 1 ? "guess" : "guesses"}`}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default WonBanner;
