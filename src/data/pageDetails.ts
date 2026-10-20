export interface PageDetails {
  title: string
  subtitle: string
  browserTitle?: string
}

export const pageDetails: Record<string, PageDetails> = {
  '/': {
    title: 'Jiasen Wang',
    subtitle: 'Economics and Computer Science Student at Boston University',
    browserTitle: 'Home',
  },
  '/education': {
    title: 'Education',
    subtitle: 'My academic background and coursework',
  },
  '/experience': {
    title: 'Professional Experience',
    subtitle: 'Internships in research and business analysis',
    browserTitle: 'Experience',
  },
  '/projects': {
    title: 'Projects',
    subtitle: 'Selected work and a JavaScript calculator',
  },
  '/activities': {
    title: 'Activities',
    subtitle: 'Campus involvement and community service',
  },
  '/skills': {
    title: 'Skills',
    subtitle: 'Technical, research, and communication skills',
  },
  '/interests': {
    title: 'Professional Interests',
    subtitle: 'Areas that connect my studies and experience',
  },
  '/credits': {
    title: 'Credits',
    subtitle: 'Resources used to create this website',
  },
}
