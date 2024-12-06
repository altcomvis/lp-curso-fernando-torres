import { useEffect } from 'react'
import ReactGA from 'react-ga4'
import { SectionHero } from './components/section-hero'
import { SectionBio } from './components/section-bio'
import { SectionCallToAction } from './components/section-call-to-action'
import { SectionCourseContent } from './components/section-course-content'
import { SectionFaq } from './components/section-faq'

export function App() {
  useEffect(() => {
    ReactGA.initialize('G-XXXXXXXXXX')
    ReactGA.send('pageview')
  }, [])

  return (
    <>
      <SectionHero />
      <SectionBio />
      <SectionCallToAction />
      <SectionCourseContent />
      <SectionFaq />
    </>
  )
}
