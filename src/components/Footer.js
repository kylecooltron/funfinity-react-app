
import { Link } from 'react-router-dom';

// images
import logo_facebook from '../images/socialfblogo.png';
import logo_instagram from '../images/socialiglogo.png';

const Footer = ({ logo }) => {

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <footer>
      <Link to="/" onClick={scrollToTop} >
      <img src={logo} className="App-footer-logo" alt="logo" />
      </Link>

      <div className='App-footer-contact-info'>
        <div> 
          <b>Address: </b>  164 South Main Street, Springville UT </div>
        <div> 
          <b>Email: </b>  store@funfinity.com </div>
        <div>
          <b>Phone: </b>
           (801) 491-8940</div>
        <br />
        <p>
          <b>Hours: </b>
          
           Mon-Sat 10am - 6pm</p>
      </div>

      <div className='App-footer-social-links'>
        <a href="https://www.facebook.com/funfinity" target="_blank" rel="noreferrer"><img src={logo_facebook} alt="facebook logo link" /></a>
        <a href="https://www.instagram.com/funfinityut/" target="_blank" rel="noreferrer"><img src={logo_instagram} alt="instagram logo link" /></a>
      </div>

      <div className='App-footer-links'>
        <Link to="/contact" onClick={scrollToTop} >Contact Us</Link>
        <Link to="/job" onClick={scrollToTop} >Job Application</Link>
        <a href="https://www.funfinity.com/employee-access">Employee Access</a>
      </div>

    </footer>
  )
}

export default Footer