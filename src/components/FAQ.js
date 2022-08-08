import { Link } from 'react-router-dom'

const FAQ = () => {
  return (
    <div className='App-faq-container'>
      <h2>Frequently Asked Questions</h2>
        <div>
          <dl>
            <dt>Do you carry cake making supplies?</dt>
            <dd>Yes! We carry a variety of cake dummies, rounds, colorings, flavorings, and much more! Call us with any specific product questions.</dd>
            
            <dt>What type of chocolate do you carry?</dt>
            <dd>We carry 10 lb bars of both Peters and Guittard brand chocolate, as well as 3 lb containers of the same brands. We also sell colored and flavored chocolate. </dd>

            <dt>Do you sell wholesale chocolate?</dt>
            <dd>Yes. Contact the store for more information.</dd>

            <dt>Do you carry video games?</dt>
            <dd>No. We carry many alternatives to video games however, with a wide array of board games and other group activities.</dd>

            <dt>What if you don’t have the item i want?</dt>
            <dd>If we carry the product regularly, you can be added to a call back list, and we will call you when we receive the product. If it is a book, we can special order the book for you. </dd>

            <dt>What is your return policy?</dt>
            <dd>We accept returns within 30 days of purchase in re-sellable condition. Item must be sealed and undamaged.  Book returns are only eligible for return within 24 hours of purchase. Manufacturer issues will be handled on a case by case basis.</dd>
            <dd>Any return without a receipt will be subject to a 20%  deduction to account for any recent sale prices or coupons. </dd>

          </dl>
        </div>



        <p>Have other questions? <Link to='/contact'> Contact Us »</Link> </p>
   

    </div>
  )
}

export default FAQ