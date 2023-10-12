import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const incrementValue = () => {
    setCounter(counter + 1);
    // setCounter((c) => c + 1);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      <button onClick={incrementValue}>+1</button>
    </>
  );
};

CounterApp.protoTypes = {
  value: PropTypes.number,
};

CounterApp.defaultProps = {
  value: 0,
};
