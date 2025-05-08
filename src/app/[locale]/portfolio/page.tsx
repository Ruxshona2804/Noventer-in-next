import React from 'react'

import Header from './components/Header'
import Projects from '../../../../components/Projects'
import ContactSection from '../portfolio/components/ContactSection copy'

const page = () => {
  return (
    <div>
      <Header />
      <Projects />
      <ContactSection />
    </div>
  )
}

export default page