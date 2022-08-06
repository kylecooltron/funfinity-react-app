import { useState} from 'react'
import Button from './Button'

//images
import books_teen from '../images/books_teen.jpg'
import books_children from '../images/books_children.jpg'

import bookslide0 from '../images/bookslide0.jpg'
import bookslide1 from '../images/bookslide1.jpg'
import bookslide2 from '../images/bookslide2.jpg'
import bookslide3 from '../images/bookslide3.jpg'
import bookslide4 from '../images/bookslide4.jpg'
import bookslide5 from '../images/bookslide5.jpg'
import bookslide6 from '../images/bookslide6.jpg'
import bookslide7 from '../images/bookslide7.jpg'
import bookslide8 from '../images/bookslide8.jpg'


const bookImages = [
  bookslide0,
  bookslide1,
  bookslide2,
  bookslide3,
  bookslide4,
  bookslide5,
  bookslide6,
  bookslide7,
  bookslide8
];


const Books = () => {

  const [bookSlideSelection, setBookSlideSelection] = useState(0)

  const clickSlide = (id) => {
    setBookSlideSelection(id)
  }

  // make a button element for each image
  let slideimagebuttons = [];
  for (let i = 0; i < bookImages.length; i++) {
      slideimagebuttons.push(
      <Button 
      className={'App-slide-btn ' + (bookSlideSelection === i ? 'active' : '')} 
      key={i} 
      onClick={() => {clickSlide(i)}} 
      text="⬤"/>
      );
  }

  return (
  <div className='App-books'>
    <h2>Books</h2>
    
    <div className='App-book-typeboxes'>
      <div>
        <img src={books_teen} alt="books for teenagers and young adults" />
        <div className='App-book-type-teen'>
          <h4>Teenage and YA Books</h4>
          <p>We carry many different genres and sizes of books to fit the needs of every type of reader. if fact, most of our staff has read several of the books on our shelves, and will recommend their favorites! Ask for suggestions and they will not disappoint.</p>
        </div>
      </div>
      <div>
        <img src={books_children} alt="books for children" />
        <div className='App-book-type-children'>
          <h4>Children’s and Board Books</h4>
          <p>Pick from dozens of children’s books, with classics like Brown Bear, Brown Bear or Green Eggs and Ham, or try something new, with books such as The Forgetful Dragon, or When Dad’s Don’t Grow Up. Either way, these books are meant for every child!</p>
        </div>
      </div>
    </div>

    <div className='App-booklides-box'>
      <img src={bookImages[bookSlideSelection]} alt="types of books" />
      <div>
        {slideimagebuttons}
      </div>
    </div>

    
  </div>
  )
}

export default Books