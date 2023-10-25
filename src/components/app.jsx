import PropTypes from "prop-types";

export const App = ({ title, subTitle, name }) => {
  return (
    <>
      <h1>{title}</h1>
      {/* <p>{JSON.stringify(subTile)}</p> */}
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
};

App.protoTypes = {
  title: PropTypes.isRequired,
  subTitle: PropTypes.string,
};

App.defaultProps = {
  name: "First App",
  subTitle: "No subtitle",
  title: "No title",
};
