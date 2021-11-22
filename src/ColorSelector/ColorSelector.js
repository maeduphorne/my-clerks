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
      <label className="dropdown-label">Card background color:</label>
      <select className="color-dropdown" onChange={(e) => handleColorSelection(e.target.value)}>
        <option value=''>
          {selectedColor}
        </option>
        options={colorNames} 
      </select>
    </form>
  )
}

export default ColorSelector;