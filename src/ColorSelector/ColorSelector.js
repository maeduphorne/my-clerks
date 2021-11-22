import './ColorSelector.css'

const ColorSelector = ({ colors, selectedColor, setSelectedColor }) => {
  const colorNames = colors.map(color => {
    return (
      <option key={color.id}>
        {color.name}
      </option> 
    )
  })

  return (
    <form className="color-selector">
      <select className="color-dropdown" onChange={(e) => setSelectedColor(e.target.value)}>
        options={colorNames} 
      </select>
    </form>
  )
}

export default ColorSelector;