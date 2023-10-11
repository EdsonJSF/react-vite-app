import PropTypes from "prop-types";

const object = {
  title: "React Vite App",
  subtitle: "Subtitle",
};

export const App = ({ number }) => {
  return (
    <>
      <h1>{object.title}</h1>
      <pre>{JSON.stringify(object)}</pre>
      <p>{number + number}</p>
    </>
  );
};

App.prototype = {
  number: PropTypes.number,
};
