import { useState, useLayoutEffect } from 'react'

import Banner from './Banner'
import InfoSection from './InfoSection'
import Product from './Product'
import EmailForm from './EmailForm'


//images
import games_img from '../images/product_games.jpg';
import chocolate_img from '../images/product_chocolate.jpg';
import toys_img from '../images/product_toys.jpg';
import books_img from '../images/product_books.jpg';


const Home = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  const [products] = useState([
    {
      id: 0,
      text: "Games",
      description: "Board games were the reason we opened our store in the first place! We carry  many different strategy games, as well as games for the whole family, card games, and games for even the youngest of children. come in today to find what is right for you!",
      imgsrc: games_img,
    },
    {
      id: 1,
      text: "Chocolate",
      description: "We carry Peters and Guittard molding and bar chocolates, chocolate colorings, and a variety of cake making supplies. Whether you are decorating a birthday cake or a wedding cake, we have the products you need to make it a success! ",
      imgsrc: chocolate_img,
    },
    {
      id: 2,
      text: "Toys",
      description: "We carry a wide selection of toys for every age!From building toys to dress ups, and from science to baby toys, we have it all! Our employees have a detailed knowledge of our products, and can help you find the right toy for you.",
      imgsrc: toys_img,
    },
    {
      id: 3,
      text: "Books",
      description: "Our book selection is varied, from “The Diary of Fredrick Douglas” to “Junie B. Jones”. We carry books for every age and in every genre, and if we don’t carry it, we will special order it for you. We also offer a 10% discount on EVERY book we sell! ",
      imgsrc: books_img,
    },
  ])


  return (
    <div>
      <Banner/>
      <InfoSection/>
      <div className='App-home-main'>
        <div className="App-intro-paragraphs">
          <p>
            Funfinity is a family owned and operated store in Springville, Utah. We carry a variety of toys, games, books, and chocolate supplies.
          </p>
          <p>
            We value our customers, and do our best every day to help you find the perfect gift. Our employees are committed to giving you the best possible experience as you shop. 
          </p>
          <p style={{fontWeight:"bold", textAlign:"center", marginTop: '2.5em'}}>
            As always, thank you for your continued support of our store during these difficult times. We love our customers!
          </p>
        </div>

        <div>
          {products.map((product) => (
            <Product 
              className='App-product-box'
              key={product.id} 
              text={product.text}
              description={product.description}
              imgsrc={product.imgsrc}
              />
          ))}
        </div>
      </div>

      <div>
          <EmailForm displayGoBack={false}/>
      </div>

    </div>
  )
}

export default Home