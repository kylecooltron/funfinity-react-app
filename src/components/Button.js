

const Button = ({  className, color, text, onClick }) => {
  return (
    <button className={className} onClick={onClick} style={{backgroundColor: color}}>{text}</button>
  )
}



export default Button