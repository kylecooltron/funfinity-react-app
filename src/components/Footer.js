
import { Link } from 'react-router-dom';

// images
import logo_facebook from '../images/socialfblogo.png';
import logo_instagram from '../images/socialiglogo.png';

const Footer = ({ logo }) => {


  return (
    <footer>

      <img src={logo} className="App-footer-logo" alt="logo" />
      <div>
        <p>Address: 164 South Main Street, Springville Ut</p>
        <p>Phone: (801) 491-8940</p>
        <p>Email: store@funfinity.com</p>
        <br />
        <p>Hours: Mon-Sat 10am - 6pm</p>
      </div>

      <div>
        <a href="https://www.facebook.com/funfinity" target="_blank" rel="noreferrer"><img src={logo_facebook} alt="facebook logo link" /></a>
        <a href="https://www.instagram.com/funfinityut/" target="_blank" rel="noreferrer"><img src={logo_instagram} alt="instagram logo link" /></a>
      </div>

      <div>
        <Link to="/contact">Contact Us</Link>
        <Link to="/job">Job Application</Link>
        <a href="https://www.funfinity.com/employee-access">Employee Access</a>
      </div>

    </footer>
  )
}

export default Footer