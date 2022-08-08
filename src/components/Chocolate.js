import { useState} from 'react'
import Button from './Button'

//images
import cakeslide0 from '../images/cakeslide0.jpg'
import cakeslide1 from '../images/cakeslide1.jpg'
import cakeslide2 from '../images/cakeslide2.jpg'
import cakeslide3 from '../images/cakeslide3.jpg'
import cakeslide4 from '../images/cakeslide4.jpg'
import cakeslide5 from '../images/cakeslide5.jpg'

const cakeImages = [
  cakeslide0,
  cakeslide1,
  cakeslide2,
  cakeslide3,
  cakeslide4,
  cakeslide5
];

const Chocolate = () => {

  const [cakeSlideSelection, setCakeSlideSelection] = useState(0)

  const clickSlide = (id) => {
    setCakeSlideSelection(id)
  }

  // make a button element for each image
  let slideimagebuttons = [];
  for (let i = 0; i < cakeImages.length; i++) {
      slideimagebuttons.push(
      <Button 
      className={'App-slide-btn ' + (cakeSlideSelection === i ? 'activebtn' : '')} 
      key={i} 
      onClick={() => {clickSlide(i)}} 
      text="⬤"/>
      );
  }

  return (
    <div>
      <h2>Chocolate and Cake Making Supplies</h2>

      <div className="App-chocolate-types">
        <div>
          <img src="https://images.squarespace-cdn.com/content/v1/5d572aaee26f960001f97912/1608006390350-SWXF1WINPEV89K2WKP31/peters1.jpg?format=500w" alt="Peter's Bar Chocolate logo" loading="lazy"/>
          <h4>Peters Bar Chocolate</h4>
          <p>Sold in 10 lb bars or 1 lb chunks. We carry a variety of Peters Milk and Dark Chocolates, as well as a White Peters Chocolate.</p>
        </div>
        <div>
          <img src="https://images.squarespace-cdn.com/content/v1/5d572aaee26f960001f97912/1608003818404-UXFHFQ8PMAEN7ZW00QHH/guittard.png?format=500w" alt="Guittard Bar Chocolate logo" loading="lazy"/>
          <h4>Guittard Bar Chocolate</h4>
          <p>Sold in 10 lb bars or 1 lb chunks. We carry both Guittard Milk and Dark Chocolate in several varieties.</p>
        </div>
      </div>

      <div className='App-cake-supplies'>
        <div>
          <h3>Cake Making Suplies include...</h3>
            <ul>
              <li>Foam Cake dummies and Cake pans</li>
              <li style={{listStyle:'none'}}>(Round and Square) </li>
              <li>Frosting tips and bags</li>
              <li>Buttercream and Fondants</li>
              <li>Meringue Powder and Royal Icing mix</li>
              <li>Candy and Chocolate Colorings</li>
              <li>Candy Flavorings</li>
              <li>Baking Emulsions</li>
              <li>Sprinkles and Sanding Sugars</li>
              <li>Candy and Cake boxes</li>
              <li>and much more!</li>
            </ul>
        </div>
      </div>
      

        <div className='App-cakeslides-box'>
          <img src={cakeImages[cakeSlideSelection]} alt="cake supplies" loading="lazy" />
          <div>
            {slideimagebuttons}
          </div>
        </div>

      </div>

  
  )
}

export default Chocolate