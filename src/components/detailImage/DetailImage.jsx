import "./detailImage.css";

// Reusable component for the images, takes in url and altText as props
export const DetailImage = ({ url, altText }) => {
  return (
    <img className="detail-image" src={url} alt={altText} />
  );
};
