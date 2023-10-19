import "./paragraph.css";

export const Paragraph = ({ text, className }) => {

  // movie.title.length > 20
  // ? `${movie.title.slice(0, 20)}...`

  return (
    <p className={className}>{text}</p>
  )
}


