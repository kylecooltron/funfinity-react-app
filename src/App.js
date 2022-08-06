// react
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// images and styling
import logo from './images/logo.png';


// styling
import './App.css';



// components
import Header from './components/Header'
import Navigation from './components/Navigation';
import Footer from './components/Footer'

// page components
import Home from './components/Home';
import Toys from './components/Toys'
import Books from './components/Books'
import BoardGames from './components/BoardGames'
import Chocolate from './components/Chocolate'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Job from './components/Job'
import EmailForm from './components/EmailForm';

function App() {

  const [showNavMenu, setShowNavMenu] = useState(false)

  const toggleNavMenu = () => {
    setShowNavMenu( !showNavMenu )
  }

  return (
    <Router>

    <>
      <Header logo={logo} toggleNavMenu = {toggleNavMenu} />
      
      {
        showNavMenu &&
        <Navigation closeNavMenu = {toggleNavMenu} />
      }
      

      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/funfinity-react-app' element={ <Home /> }/>
        <Route path='/toys' element={ <Toys /> }/>
        <Route path='/books' element={ <Books /> }/>
        <Route path='/boardgames' element={ <BoardGames /> }/>
        <Route path='/chocolate' element={ <Chocolate /> }/>
        <Route path='/faq' element={ <FAQ /> }/>
        <Route path='/contact' element={ <Contact /> }/>
        <Route path='/job' element={ <Job /> }/>
        <Route path='/emailform' element={ <EmailForm displayGoBack={true}/> }/>

        
      </Routes>


      <Footer logo={logo} />
    </>

    </Router>
  );
}

export default App;
