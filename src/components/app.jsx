import PropTypes from "prop-types";

export const App = ({ title, subTitle, name }) => {
  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      <p>{subTitle}</p>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
};

App.propTypes = {
  name: PropTypes.string,
  subTitle: PropTypes.string,
  title: PropTypes.string.isRequired,
};

App.defaultProps = {
  name: "First App",
  subTitle: "No subtitle",
};
