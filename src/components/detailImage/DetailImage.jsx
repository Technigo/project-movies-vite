import "./detailImage.css";

export const DetailImage = ({ url, altText }) => {
  return (
    <div className="detail-image-wrapper">
      <img className="detail-image" src={url} alt={altText} />
    </div>
  );
};
