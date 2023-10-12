import PropTypes from "prop-types";

const incrementValue = (event) => {
  console.log(event);
};

export const CounterApp = ({ value }) => {
  return (
    <>
      <h1>CounterApp</h1>
      <h2>{value}</h2>

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
