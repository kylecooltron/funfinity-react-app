
//images
import toys_active from '../images/toys_active.jpg'
import toys_art from '../images/toys_art.jpg'
import toys_baby from '../images/toys_baby.jpg'
import toys_crafts from '../images/toys_crafts.jpg'
import toys_dressups from '../images/toys_dressups.jpg'
import toys_figurines from '../images/toys_figurines.jpg'
import toys_gaggifts from '../images/toys_gaggifts.jpg'
import toys_novelty from '../images/toys_novelty.jpg'
import toys_teens from '../images/toys_teens.jpg'

const toysTypes = [
  {
    text:"Active",
    img: toys_active
  },
  {
    text:"Art",
    img: toys_art
  },
  {
    text:"Baby",
    img: toys_baby
  },
  {
    text:"Craft",
    img: toys_crafts
  },
  {
    text:"Dress Ups",
    img: toys_dressups
  },
  {
    text:"Figurines",
    img: toys_figurines
  },
  {
    text:"Gag Gifts",
    img: toys_gaggifts
  },
  {
    text:"Novelty",
    img: toys_novelty
  },
  {
    text:"Teens",
    img: toys_teens
  }
];


const Toys = () => {

  return (
    <div className='App-toys'>
      <h2>Toys</h2>

      <div>
        {
        toysTypes.map((toyType) => (
          <figure key={toyType.text}>
            <img src={toyType.img} alt={`${toyType.text} Toys`} loading="lazy" />
            <figcaption>{toyType.text}</figcaption>
          </figure>
          ))
        }
      </div>

    </div>
  )
}

export default Toys