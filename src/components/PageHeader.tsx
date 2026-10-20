import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { pageDetails } from '../data/pageDetails'

export default function PageHeader() {
  const { pathname } = useLocation()
  const details = pageDetails[pathname] ?? {
    title: 'Page Not Found',
    subtitle: 'The requested page does not exist',
  }

  useEffect(() => {
    document.title = `Jiasen Wang | ${details.browserTitle ?? details.title}`
  }, [details.browserTitle, details.title])

  return (
    <header>
      <h1>{details.title}</h1>
      <p>{details.subtitle}</p>
    </header>
  )
}
