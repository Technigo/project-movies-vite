import './detailImage.css'

export const DetailImage = ({ url, altText }) => {
  return (
    <img className="detail-image" src={url} alt={altText} />
  )
}
