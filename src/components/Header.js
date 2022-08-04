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
  };


  useEffect(() => {
    getPosition();
  }, []);

  return ( 
    <header className="App-header">

      { /* show the email signup bar at the top of the page until the X button is clicked */
        showEmailSignup &&
        <div className ="App-email-signup">
          Click 
          <Link to='/emailform'> here </Link>
          to sign up for emails. 
          <button onClick={closeEmail}> X </button>
        </div>
      }

      <div ref={myRef} className={"App-navbar" + ((scrollPosition > y) ? ' sticky' : '')}>
        <Link to='/'><img src={logo} className="App-logo" alt="logo" /></Link>
       

        <a href="#/" onClick={toggleNavMenu} >☰</a>
      </div>
      <div className="App-nav-empty"></div>

    </header>
  )
}

export default Header