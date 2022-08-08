
import InfoSection from './InfoSection'
import { useLayoutEffect } from 'react'

const Contact = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div>
      <InfoSection />
      <div className='App-contact-form'>
        <iframe 
          title="contact-us-form" 
          src="https://docs.google.com/forms/d/e/1FAIpQLScdDnQbUqWu0T0qo2biCKLDeKkoEmfxLJgXS2WSsiRua9crxg/viewform?embedded=true" 
          width="640" height="860" frameBorder="0" 
          marginHeight="0" marginWidth="0" scrolling="no">Loading…
        </iframe>
      </div>
    </div>
  )
}

export default Contact