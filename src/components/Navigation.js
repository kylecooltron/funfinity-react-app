import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {useLocation } from 'react-router-dom'

const Navigation = ({ closeNavMenu }) => {

  const location = useLocation()
  const box = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false)

  useEffect(() => {
    // Function for click event
    function handleOutsideClick(event) 
    {
        // if we clicked outside the box
        if( box.current && !box.current.contains(event.target)){
            // make sure the menu had a chance to open
            if(menuOpened == true){
              // close it
              closeNavMenu();
              setMenuOpened(false)
            }else{
              // keep track of the menu opening
              setMenuOpened(true)
            }
        }
    }

    // Adding click event listener
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [menuOpened, box]);


  return (
    <nav ref={box}>
      <button onClick={ closeNavMenu } >X</button>
      <ul>
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/" onClick={ closeNavMenu }>Home</Link>
        </li>
        <li className={location.pathname === '/toys' ? 'active' : ''}>
          <Link to="/toys" onClick={ closeNavMenu }>Toys</Link>
        </li>
        <li className={location.pathname === '/books' ? 'active' : ''}>
          <Link to="/books" onClick={ closeNavMenu }>Books</Link>
        </li>
        <li className={location.pathname === '/boardgames' ? 'active' : ''}>
          <Link to="/boardgames" onClick={ closeNavMenu }>Board Games</Link>
        </li>
        <li className={location.pathname === '/chocolate' ? 'active' : ''}>
          <Link to="/chocolate" onClick={ closeNavMenu }>Chocolate</Link>  
        </li>
        <li className={location.pathname === '/faq' ? 'active' : ''}>
          <Link to="/faq" onClick={ closeNavMenu }>FAQ</Link>
        </li>
        <li className={'App-navbtn-conact' + (location.pathname === '/contact' ? 'active' : '')}>
          <Link to="/contact" onClick={ closeNavMenu }>Contact Us</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation



