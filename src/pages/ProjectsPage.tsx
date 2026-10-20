import Calculator from '../components/Calculator'

export default function ProjectsPage() {
  return (
    <main>
      <h2>Wearable Health Data Analytics Project</h2>
      <section className="entry">
        <div className="entry-heading">
          <h3>Health and Performance Data Analysis</h3>
          <p>Boston, Massachusetts | January 2026 - In Progress</p>
        </div>
        <ul>
          <li>Analyze wearable health data such as sleep, heart rate variability, and activity levels.</li>
          <li>Build data cleaning and transformation workflows with Python and SQL.</li>
          <li>Design product metrics such as sleep consistency and strain-recovery ratio.</li>
          <li>Create visualizations and short summaries to explain behavioral trends and recovery patterns.</li>
        </ul>
      </section>
      <Calculator />
    </main>
  )
}
