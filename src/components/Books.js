import { useState} from 'react'
import Button from './Button'


const Books = () => {

  const [bookSlideSelection, setBookSlideSelection] = useState(0)

  const clickSlide = (id) => {
    setBookSlideSelection(id)
  }
  // how many books types images are there
  const numimages = 6;
  // make a button element for each image
  let slideimagebuttons = [];
  for (let i = 0; i < numimages; i++) {
      slideimagebuttons.push(<Button className='App-slide-btn' key={i} onClick={() => {clickSlide(i)}} text="⬤"/>);
  }

  return (
  <div>
    <h2>Books</h2>
    
    <div>
      <div>
        <img src="" alt="" />
        <h4>Teenage and YA Books</h4>
        <p>We carry many different genres and sizes of books to fit the needs of every type of reader. if fact, most of our staff has read several of the books on our shelves, and will recommend their favorites! Ask for suggestions and they will not disappoint.</p>
      </div>
      <div>
        <img src="" alt="" />
        <h4>Children’s and Board Books</h4>
        <p>Pick from dozens of children’s books, with classics like Brown Bear, Brown Bear or Green Eggs and Ham, or try something new, with books such as The Forgetful Dragon, or When Dad’s Don’t Grow Up. Either way, these books are meant for every child!</p>
      </div>
    </div>

    <div className='App-booklides-box'>
      <img src={`../images/bookslide${bookSlideSelection}.jpg`} alt="types of books" />
      <div>
        {slideimagebuttons}
      </div>
    </div>

    
  </div>
  )
}

export default Books