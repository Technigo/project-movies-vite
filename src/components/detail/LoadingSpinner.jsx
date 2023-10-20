import { InfinitySpin } from "react-loader-spinner";

export const LoadingSpinner = () => {
  return (
    <>
      <InfinitySpin width="200" color="#fff">
        <span className="visually-hidden">Loading...</span>
      </InfinitySpin>
    </>
  );
};
