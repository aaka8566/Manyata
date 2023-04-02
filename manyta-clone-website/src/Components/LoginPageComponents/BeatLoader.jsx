import BeatLoader from "react-spinners/BeatLoader";
const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
const BeatLoaderComp = ({ loading, color }) => {
  return (
    <>
      <BeatLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  );
};

export default BeatLoader;
