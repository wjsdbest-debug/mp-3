export default function CreditsPage() {
  return (
    <main>
      <h2>Website Credits</h2>
      <p>The information on this website is based on my resume and public LinkedIn profile.</p>
      <p>
        Professional profile:{' '}
        <a className="contact-link" href="https://www.linkedin.com/in/jiasenwang666" target="_blank" rel="noopener noreferrer">
          linkedin.com/in/jiasenwang666
        </a>
      </p>
      <p>
        The website uses Times New Roman throughout. Tinos is provided by{' '}
        <a className="contact-link" href="https://fonts.google.com/" target="_blank" rel="noopener noreferrer">
          Google Fonts
        </a>{' '}
        as a compatible web fallback.
      </p>
      <p>The website was created with HTML, CSS, and JavaScript for my mini project.</p>
    </main>
  )
}
