
function Product( { text, description, imgsrc }) {
  return (
    <div>
      <h4>{text}</h4>
      <p>{description}</p>
      <img src={imgsrc} alt={text} />
    </div>
  )
}

export default Product