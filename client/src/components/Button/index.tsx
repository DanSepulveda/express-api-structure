const Button = () => {
  const handleClick = () => {
    alert('Testing')
  }

  return (
    <button
      onClick={handleClick}
      className="bg-teal-400 p-2"
    >
      Test
    </button>
  )
}

export default Button
