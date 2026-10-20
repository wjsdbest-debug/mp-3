import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import ActivitiesPage from './pages/ActivitiesPage'
import CreditsPage from './pages/CreditsPage'
import EducationPage from './pages/EducationPage'
import ExperiencePage from './pages/ExperiencePage'
import HomePage from './pages/HomePage'
import InterestsPage from './pages/InterestsPage'
import NotFoundPage from './pages/NotFoundPage'
import ProjectsPage from './pages/ProjectsPage'
import SkillsPage from './pages/SkillsPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'education', element: <EducationPage /> },
      { path: 'experience', element: <ExperiencePage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'activities', element: <ActivitiesPage /> },
      { path: 'skills', element: <SkillsPage /> },
      { path: 'interests', element: <InterestsPage /> },
      { path: 'credits', element: <CreditsPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
