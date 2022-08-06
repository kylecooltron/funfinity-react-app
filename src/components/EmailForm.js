import { Link } from "react-router-dom"


const EmailForm = ({ displayGoBack }) => {
  return (
    <div className="App-email-form">
      <iframe 
      title="email-subscribe-form" 
      src="https://docs.google.com/forms/d/e/1FAIpQLSd6K8cVo97vVD00g9zk3An6BVeGy0anmnblwbJPDZUdz9CgzQ/viewform?embedded=true" 
      width="640" height="700" frameBorder="0" 
      marginHeight="0" marginWidth="0" scrolling="no">Loading…</iframe>

      {displayGoBack && 
      <Link to='/'>Back to Home</Link>
      }

    </div>
  )
}

export default EmailForm