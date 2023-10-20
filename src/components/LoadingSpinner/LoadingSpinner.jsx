// Import the InfinitySpin component from the "react-loader-spinner" library.
import { InfinitySpin } from "react-loader-spinner";

export const LoadingSpinner = () => {
  return (
    // Create a container div with the class "loading-wrapper" for styling.
    <div className="loading-wrapper">
      <InfinitySpin width="200" color="#fff" ariaLabel="Loading Spinner">
        {/* Provide a visually hidden text for accessibility purposes.
           This text is hidden from view but available for screen readers. */}
        <span className="visually-hidden">Loading...</span>
      </InfinitySpin>
    </div>
  );
};
