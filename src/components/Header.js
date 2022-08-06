import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';


const Header = ( { logo, toggleNavMenu }) => {

  const [showEmailSignup, setShowEmailSignup] = useState(true)

  const myRef = useRef();
  // Y
  const [y, setY] = useState();

  const closeEmail = () => {
    setShowEmailSignup(false)
    setTimeout(getPosition, 10);
  }

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
  };
 
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
        window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // This function calculate X and Y
  const getPosition = () => {
    const y = myRef.current.offsetTop;
    setY(y);
    console.log(y);
  };


  useEffect(() => {
    getPosition();
  }, []);

  return ( 
    <header className="App-header">

      { /* show the email signup bar at the top of the page until the X button is clicked */
        showEmailSignup &&
        <div className ="App-email-signup">
          <Link to='/emailform'> Click here to sign up for our email newsletter! </Link>
          <button onClick={closeEmail}> X </button>
        </div>
      }

      <div ref={myRef} className={"App-navbar" + ((scrollPosition >= y) ? ' sticky' : '')}>
        <a className="App-ham" href="#/" onClick={toggleNavMenu} >☰</a>
        <Link to='/'><img src={logo} className="App-logo" alt="logo" /></Link>
      </div>
      <div className="App-nav-empty"></div>

    </header>
  )
}

export default Header