
function Product( { className, text, description, imgsrc }) {
  return (
    <div className={className} >
      <h4>{text}</h4>
      <p>{description}</p>
      <img src={imgsrc} alt={text} loading="lazy"/>
    </div>
  )
}

export default Product