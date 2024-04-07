import { Link } from 'react-router-dom'

export const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Oops! Page not found</h2>
      <p style={styles.text}>
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link to="/" style={styles.link}>
        Go back to Home
      </Link>
    </div>
  )
}
const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#333',
  },
  text: {
    fontSize: '1.2rem',
    marginBottom: '20px',
    color: '#666',
  },
  link: {
    fontSize: '1.2rem',
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
}
