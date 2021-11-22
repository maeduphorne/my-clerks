import './ColorSelector.css'

const ColorSelector = ({ colors, selectedColor, handleColorSelection }) => {
  const colorNames = colors.map(color => {
    return (
      <option key={color.id}>
        {color.name}
      </option> 
    )
  })

  return (
    <form className="color-selector">
      <select className="color-dropdown" onChange={(e) => handleColorSelection(e.target.value)}>
        options={colorNames} 
      </select>
    </form>
  )
}

export default ColorSelector;