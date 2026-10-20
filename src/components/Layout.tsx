import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navigation from './Navigation'
import PageHeader from './PageHeader'

export default function Layout() {
  return (
    <div className="page">
      <PageHeader />
      <div className="site-layout">
        <Navigation />
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
