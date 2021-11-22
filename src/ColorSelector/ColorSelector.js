import './ColorSelector.css'

const ColorSelector = ({ colors, selectedColor, setSelectedColor }) => {
  const colorNames = colors.map(color => {
    return (
      <option 
        >{color.name}
      </option> 
    )
  })
  
}

export default ColorSelector;