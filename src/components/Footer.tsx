import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <p>
        &copy; 2026 Jiasen Wang. All Rights Reserved.{' '}
        <Link to="/credits">Credits</Link> |{' '}
        <a
          href="https://www.linkedin.com/in/jiasenwang666"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>
    </footer>
  )
}
