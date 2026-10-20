import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <main>
      <h2>Page Not Found</h2>
      <p>The page you requested does not exist.</p>
      <p><Link className="contact-link" to="/">Return to the home page</Link></p>
    </main>
  )
}
