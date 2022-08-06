
import boardgamesimage0 from '../images/boardgames0.jpg'
import boardgamesimage1 from '../images/boardgames1.jpg'
import boardgamesimage2 from '../images/boardgames2.jpg'

const boardGamesImages = [
  boardgamesimage0,
  boardgamesimage1,
  boardgamesimage2
]

const BoardGames = () => {
  return (
    <div className='App-boardgames-container'>
      <h2>Board Games</h2>
      {
        boardGamesImages.map( (url) => (
          <img src={url} alt={url} />
        ))
      }
    </div>
  )

}

export default BoardGames