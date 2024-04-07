import { useState } from 'react'
import { FormatDate } from '../utils/FormatDate'
// Maximum characters to display initially
const MAX_LENGTH = 150

export const Reviews = ({ author, content, created_at }) => {
  const [expanded, setExpanded] = useState(false)

  // Function to toggle expanded state
  const toggleExpanded = () => {
    setExpanded(!expanded)
  }

  // Truncate content if it exceeds maximum length
  const truncatedContent =
    content.length > MAX_LENGTH
      ? `${content.substring(0, MAX_LENGTH)}...`
      : content

  return (
    <div className="reviewsWrapper">
      <h5>Author: {author}</h5>
      <p>{expanded ? content : truncatedContent}</p>
      {content.length > MAX_LENGTH && (
        <button onClick={toggleExpanded}>
          {expanded ? 'Show Less' : 'Read More'}
        </button>
      )}
      <h6>Date: {FormatDate(created_at)}</h6>
    </div>
  )
}
